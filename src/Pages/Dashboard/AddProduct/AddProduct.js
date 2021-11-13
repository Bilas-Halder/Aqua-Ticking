import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './AddProduct.css';

const AddProduct = () => {

    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const { dbURL } = useAuth();


    const postData = (url, data) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    };



    const onSubmit = async (data) => {
        console.log(data);
        data.price = parseFloat(data.price);
        data.rating = parseFloat(data.rating);
        data.reviews = parseFloat(data.reviews);
        data.percentOff = parseFloat(data.percentOff);
        if (data.rating === "") {
            data.rating = 0;
        }
        else {
            data.rating = parseInt(data.rating);
        }
        console.log(data);

        const url = `${dbURL}/watches`;
        await postData(url, data)
            .then(response => response.json())
            .then(d => {
                console.log(data);
                window.alert("Your Product Added");
                history.push('/dashboard');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (

        <div className="position-relative pt-5 ">
            <div className="tag-line">
                <h3 className="left-right">Add a Product</h3>
            </div>
            <div className="d-flex w-100 justify-content-center align-items-center">
                <div className="add-form-div text-center p-4">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-input" required  {...register("title")} placeholder="Watch Model" />

                        <input className="form-input" {...register("price")} placeholder="Price : Ex-250" />

                        <input className="form-input" required  {...register("percentOff")} placeholder="Discount Percent: Ex-5" />

                        <input className="form-input" required {...register("img")} placeholder="Image URL" />

                        <input className="form-input" required {...register("rating")} placeholder="Stars out of 5" />

                        <input className="form-input" required {...register("reviews")} placeholder="Review Count" />

                        <input className="submit-btn" type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;