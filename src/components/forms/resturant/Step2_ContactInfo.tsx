import { RestaurantFormData } from "../../../types/RestaurantForm";

type Props = {
  data: RestaurantFormData;
  next: () => void;
  prev: () => void;
  update: (data: Partial<RestaurantFormData>) => void;
};

const restaurantTypes = ["Fast Food", "Fine Dining", "Cafe", "Takeaway"];
const tags = ["Pizza", "Vegan", "Indian", "Burgers", "Seafood", "Dessert"];

// Smart label helper
const label = (text: string, required?: boolean) => (
  <span>
    {text}
    {required && <span className="ml-1 text-red-500">*</span>}
  </span>
);

export default function Step2_RestaurantDetails({
  data,
  next,
  prev,
  update,
}: Props) {
  // Validation for required fields
  const isValid = data.name && data.cuisine && data.description;

  return (
    <div className="mx-auto w-[98%] space-y-6 lg:w-[80%]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="form-control w-full">
          {label("Restaurant Name", true)}
          <input
            className="input input-bordered w-full"
            onChange={(e) => update({ name: e.target.value })}
            placeholder="Restaurant Name"
            value={data.name || ""}
          />
        </label>

        <label className="form-control w-full">
          {label("Restaurant Type", true)}
          <select
            className="select select-bordered w-full"
            onChange={(e) => update({ cuisine: e.target.value })}
            value={data.cuisine || ""}
          >
            <option value="">Select Type</option>
            {restaurantTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="form-control w-full">
        {label("About the Restaurant", true)}
        <textarea
          className="textarea textarea-bordered w-full"
          onChange={(e) => update({ description: e.target.value })}
          placeholder="About the Restaurant"
          value={data.description || ""}
        />
      </label>
      <div>
        <span className="font-medium">Tags:</span>
        <div className="mt-2 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <label className="cursor-pointer" key={tag}>
              <input
                checked={(data.tags ?? []).includes(tag)}
                className="checkbox mr-2"
                onChange={(e) => {
                  const updatedTags = e.target.checked
                    ? [...(data.tags ?? []), tag]
                    : (data.tags ?? []).filter((t) => t !== tag);
                  update({
                    cuisines: updatedTags.join(", "),
                    tags: updatedTags,
                  });
                }}
                type="checkbox"
              />
              {tag}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
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
