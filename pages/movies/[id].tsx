import React from "react";
import httpClient from "../../core/httpClient";
import {GetServerSidePropsContext} from "next";
import {IMovie} from "../trending";

interface IProps {
    movie: IMovie;
}

const MoviesDetails = ({movie}: IProps) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 py-20">
            <div className="container mx-auto px-6 md:px-12 xl:px-32">
                <div className="mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                        {movie.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
                        {movie.overview}
                    </p>
                </div>
                <div className="grid items-center gap-12 md:grid-cols-3">
                    <div className="space-y-4 text-center">
                        <img
                            className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            alt="woman"
                            loading="lazy"
                            width="640"
                            height="805"
                        />
                    </div>
                </div>
            </div>
        </div>

    )

}

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const id = context.query.id
    const response = await httpClient.get(`/movie/${id}`);
    console.log(response);
    return {
        props: {
            movie: response.data,
        },
    };
};

export default MoviesDetails;