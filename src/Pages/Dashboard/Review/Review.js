import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const MakeReview = () => {

    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const { dbURL, user } = useAuth();


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
        if (data.rating === "") {
            data.rating = 0;
        }
        else {
            data.rating = parseFloat(data.rating);
        }

        const url = `${dbURL}/review`;
        await postData(url, data)
            .then(response => response.json())
            .then(d => {
                console.log(data);
                window.alert("Thank You for your Feedback");
                history.push('/dashboard');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (

        <div className="position-relative pt-5 ">
            <div className="tag-line">
                <h3 className="left-right">Make a Review</h3>
            </div>
            <div className="d-flex w-100 justify-content-center align-items-center">
                <div className="add-form-div text-center p-4">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-input" value={user.displayName} required  {...register("displayName")} placeholder="Name" />

                        <input className="form-input" value={user.email} required  {...register("email")} placeholder="Email" />

                        <input className="form-input" {...register("img")} placeholder="Image URL Please" />

                        <input className="form-input" required {...register("rating")} placeholder="Rate Our Work" />

                        <textarea className="form-input msg-box" {...register("reviewMsg")} placeholder="Feedback Required." />


                        <input className="submit-btn" type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default MakeReview;