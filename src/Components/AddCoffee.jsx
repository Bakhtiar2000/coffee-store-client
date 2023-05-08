import React from 'react';

const AddCoffee = () => {
    const handleAddCoffee= event=> {
        event.preventDefault()
        const form= event.target
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add a coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* Form supplier row */}
                <div className='md:flex gap-4 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Coffee name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                
                {/* Form supplier and taste row */}
                <div className='md:flex gap-4 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Supplier name" name="supplier" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Taste" name="taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* Form category and details row */}
                <div className='md:flex gap-4 mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Category" name="category" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Details" name="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* Form photo url row */}
                <div className='mb-8'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Photo url" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Coffee" className='btn btn-block'/>
            </form>
        </div>
    );
};

export default AddCoffee;