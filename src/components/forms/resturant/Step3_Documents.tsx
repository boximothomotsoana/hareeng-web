import L from "leaflet";
import { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";

import { RestaurantFormData } from "../../../types/RestaurantForm";

type Props = {
  data: RestaurantFormData;
  next: () => void;
  prev: () => void;
  update: (data: Partial<RestaurantFormData>) => void;
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const DEFAULT_COORDS: [number, number] = [-26.2041, 28.0473]; // Johannesburg default

const label = (text: string, required?: boolean) => (
  <span>
    {text}
    {required && <span className="ml-1 text-red-500">*</span>}
  </span>
);

export default function Step3_AddressAndHours({
  data,
  next,
  prev,
  update,
}: Props) {
  const [is24_7, setIs24_7] = useState(false);

  // Validation: all required fields must be filled
  const isValid =
    data.street &&
    data.city &&
    data.postalCode &&
    data.province &&
    data.country &&
    data.latitude &&
    data.longitude &&
    Array.isArray(data.operatingDays) &&
    data.operatingDays.length > 0 &&
    data.operatingHours &&
    data.operatingDays.every(
      (day) =>
        data.operatingHours?.[day] &&
        data.operatingHours?.[day]?.open &&
        data.operatingHours?.[day]?.close,
    );

  const handleTimeChange = (
    day: string,
    field: "close" | "open",
    value: string,
  ) => {
    const hours = { ...(data.operatingHours || {}) };
    hours[day] = { ...(hours[day] || {}), [field]: value };
    update({ operatingHours: hours });
  };

  const handleDayToggle = (day: string) => {
    const daysActive = new Set(data.operatingDays || []);
    if (daysActive.has(day)) {
      daysActive.delete(day);
    } else {
      daysActive.add(day);
    }
    update({ operatingDays: Array.from(daysActive) });
  };

  const handle24_7 = () => {
    const newVal = !is24_7;
    setIs24_7(newVal);
    if (newVal) {
      const allHours: Record<string, { close: string; open: string }> = {};
      days.forEach((day) => {
        allHours[day] = { close: "23:59", open: "00:00" };
      });
      update({
        operatingDays: [...days],
        operatingHours: allHours,
      });
    } else {
      update({
        operatingDays: [],
        operatingHours: {},
      });
    }
  };

  const setLatLng = (lat: number, lng: number) => {
    update({ latitude: lat.toString(), longitude: lng.toString() });
  };

  return (
    <div className="space-y-6">
      {/* Address Fields */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="form-control w-full">
          {label("Street Address", true)}
          <input
            className="input input-bordered w-full"
            onChange={(e) => update({ street: e.target.value })}
            placeholder="Street Address"
            value={data.street}
          />
        </label>
        <label className="form-control w-full">
          {label("City", true)}
          <input
            className="input input-bordered w-full"
            onChange={(e) => update({ city: e.target.value })}
            placeholder="City"
            value={data.city}
          />
        </label>
        <label className="form-control w-full">
          {label("Postal Code", true)}
          <input
            className="input input-bordered w-full"
            onChange={(e) => update({ postalCode: e.target.value })}
            placeholder="Postal Code"
            value={data.postalCode}
          />
        </label>
        <label className="form-control w-full">
          {label("Province / State", true)}
          <input
            className="input input-bordered w-full"
            onChange={(e) => update({ province: e.target.value })}
            placeholder="Province / State"
            value={data.province}
          />
        </label>
        <label className="form-control w-full">
          {label("Country", true)}
          <input
            className="input input-bordered w-full"
            onChange={(e) => update({ country: e.target.value })}
            placeholder="Country"
            value={data.country}
          />
        </label>
        <label className="form-control w-full">
          {label("Latitude", true)}
          <input
            className="input input-bordered w-full"
            onChange={(e) => update({ latitude: e.target.value })}
            placeholder="Latitude"
            value={data.latitude}
          />
        </label>
        <label className="form-control w-full">
          {label("Longitude", true)}
          <input
            className="input input-bordered w-full"
            onChange={(e) => update({ longitude: e.target.value })}
            placeholder="Longitude"
            value={data.longitude}
          />
        </label>
      </div>

      {/* Map Picker */}
      <div>
        <p className="mb-2 font-semibold">Pick Location on Map</p>
        <MapContainer
          center={
            data.latitude && data.longitude
              ? [parseFloat(data.latitude), parseFloat(data.longitude)]
              : DEFAULT_COORDS
          }
          className="h-64 w-full rounded"
          zoom={13}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationMarker setPosition={setLatLng} />
          {data.latitude && data.longitude && (
            <Marker
              icon={L.icon({
                iconAnchor: [12, 41],
                iconSize: [25, 41],
                iconUrl:
                  "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
              })}
              position={[parseFloat(data.latitude), parseFloat(data.longitude)]}
            />
          )}
        </MapContainer>
      </div>

      {/* Operating Days */}
      <div>
        {label("Days of Operation", true)}
        <div className="flex flex-wrap items-center gap-4">
          {days.map((day) => (
            <label className="flex cursor-pointer items-center gap-2" key={day}>
              <input
                checked={(data.operatingDays ?? []).includes(day)}
                className="checkbox"
                onChange={() => handleDayToggle(day)}
                type="checkbox"
              />
              {day}
            </label>
          ))}
          <label className="ml-4 flex items-center gap-2">
            <input
              checked={is24_7}
              className="checkbox"
              onChange={handle24_7}
              type="checkbox"
            />
            24/7 Everyday
          </label>
        </div>
      </div>

      {/* Operating Hours */}
      <div>
        {label("Operating Hours", true)}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {(data.operatingDays ?? []).map((day) => (
            <div className="flex items-center gap-2" key={day}>
              <span className="w-12">{day}</span>
              <input
                className="input input-bordered"
                onChange={(e) => handleTimeChange(day, "open", e.target.value)}
                type="time"
                value={data.operatingHours?.[day]?.open || ""}
              />
              <span>-</span>
              <input
                className="input input-bordered"
                onChange={(e) => handleTimeChange(day, "close", e.target.value)}
                type="time"
                value={data.operatingHours?.[day]?.close || ""}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex justify-between">
        <button className="btn btn-outline px-10 py-2" onClick={prev}>
          Back
        </button>
        <button
          className="btn btn-primary px-10 py-2"
          disabled={!isValid} // <-- Disable if not valid
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function LocationMarker({
  setPosition,
}: {
  setPosition: (lat: number, lng: number) => void;
}) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}
