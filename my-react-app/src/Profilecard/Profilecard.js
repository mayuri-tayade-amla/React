import react from 'react';
function Profilecard(){
    const languages=['Html+css','javascript','web design','Git and Github','React','Bootstrap']
    return(
        <div>
      <h2 className="font-bold">Mayuri Tayade</h2>
      <span className='font-medium grid grid-cols-3'>
      Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. 
      Set time aside to learn and get reminders using your learning scheduler.
      </span>
      <div>
        {
            languages.map((languages,index)=>
            <button className='border p-2 m-4 mt-3 text-amber-500' key={index}>
                   {languages}
            </button>
            )
        }
      </div>
        </div>
   
    )
}
export default Profilecard;