function ProductCard({
    image,
    title,
    price,
    discount,
  }) {
    const discountedPrice =
      price - (price * discount) / 100;
  
    return (
      <div
            className="
              group
              relative
              overflow-hidden
              rounded-xl
              border
              border-[#E8E2D4]
              bg-[#F5F0E6]
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
        
            {discount > 0 && (
              <div
                className="
                  absolute
                  top-3
                  right-3
                  z-10
                  rounded-full
                  bg-[#0F4BAF]
                  px-3
                  py-1
                  text-sm
                  font-semibold
                  text-[#E5D9B6]
                "
              >
                {discount}% OFF
              </div>
            )}

        {/* Image */}
        <div className="overflow-hidden aspect-[3/4] bg-[#FCFDFB]">
          <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-contain
            transition-transform
            duration-300
            group-hover:scale-105
          "
          />
        </div>
  
        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#0F4BAF]">
            {title}
          </h3>
  
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xl font-bold text-[#0F4BAF]">
              ₹{discountedPrice}
            </span>
  
            {discount > 0 && (
              <>
                <span className="text-[#8F8A7A] line-through">
                  ₹{price}
                </span>
  
                <span className="text-green-600">
                  {discount}% OFF
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductCard;