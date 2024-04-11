import BoxBrand from "./box.brand";

const Brand = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 mb-48">

      {/* List Blog Brand */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <BoxBrand />
        <BoxBrand />
        <BoxBrand />
        <BoxBrand />
        <BoxBrand />
        <BoxBrand />
      </div>
    </div>
  );
};

export default Brand;