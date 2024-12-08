// import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";

const Team = () => {
    const [teams,setTeams] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchTeams = async () => {
        try {
          const response = await axios.get("/api/teams");
          console.log(response.data); 
          setTeams(response.data.data || response.data); 
        } catch (error) {
          console.error("Error fetching teams:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTeams();
    }, []);
  
    
    if (loading) {
      return <h1>Loading...</h1>;
    }
  
    if (!Array.isArray(teams) || teams.length === 0) {
      return <h1>No data available</h1>;
    }
    return (       
        <div>
            <div className="sm:m-10 flex justify-center">
                <div className="text-center">
                    <p className='text-[#0096C7] font-bold'>Our team</p>
                    <h2 className="text-4xl">Meet Our <span className='text-[#0096C7]'>Smart People.</span></h2>
                    <p className='sm:w-[600px] text-lg'>With a diverse range of expertise and commitment to excellence, our team is dedicated to delivering innovative marketing solutions that drive result Get to know the individuals behind our success</p>
                </div>
            </div>
            
            <div  className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {
              teams.map((team,i)=>( 
                <div key={i}>
                  <div className="card card-compact bg-base-100 shadow-md">
          
                    <figure>
                      <img
                        src={team.img}
                        alt="img" className='w-full h-48 object-cover' />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{team.name}</h2>
                      <p>{team.position}</p>
                    </div>
                  </div>
                </div>
              ))
            }
            </div>
            
        </div>
    );
};

export default Team;