//@ts-nocheck
import React from 'react'
import LocationMap from './LocationMap'
import { Spinner } from '../Loader/Spinner'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function PlantSuggestion({data}) {
	const [recommendedLocation, setRecommendedLocation] = React.useState(null); 
	const [loading, setLoading] = React.useState(true); 
	useEffect(() => {
		try{
		axios.get("https://haseebkhan09876-plantation-predictor.hf.space/predict_plantation", {})
		.then((Response) => {
		  setRecommendedLocation(Response.data.result.most_needed_area);
		  console.log("Response from the server -> ", Response.data.result.most_needed_area);
		  const secondHighestArea = Object.entries(Response.data.result.plantation_need_per_area)
		  .sort((a,b) => b[1]-a[1])[1][0];
		  console.log("Second highest area -> ", secondHighestArea)
		  setLoading(false);
		})
		}catch(err){
		  console.error("Error Fetching the location -> ", err);
		}
	  },[]);
  return (
	<div>
		{ loading ? (
			<div className="flex items-center justify-center h-screen">
			<Spinner />
			</div>):
			(
	  			<LocationMap recommendedLocation={recommendedLocation} />
			)
		}
	</div>

  )
}

export default PlantSuggestion
