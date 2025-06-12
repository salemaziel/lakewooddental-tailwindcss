import React from 'react';
//import teamImg from '../../../images/teamim.png';
//import tesimg from '../../../images/container02.jpg';
//import forward from '../../../images/forward.png';
//import backward from '../../../images/backward.png';
const S6testinomial = () => {
	return (
		<>
			<section className="relative left-0 w-full h-full bg-[#1F3B53] my-0">
				<div className="container relative px-4 py-12 mx-auto">
					<div className="flex items-center justify-center">
						{/*<div className="container flex justify-center w-1/6 mx-auto text-center "> 
<img src={forward} alt='next testimonial'  /> 
</div>*/}
						<div className="w-9/12">
							<h1 className=" text-white text-center font-semibold text-4xl after:block after:border-2 after:border-[#4294C2] after:w-20 after:my-4 after:mx-auto">
								What our patients say
							</h1>
							<p className="text-base font-normal text-center text-white">
								I can't speak highly enough of Dr. James Lee and
								his Staff. I've been in his care for 14
								years,with many successful procedures and no
								problems. He is gentle and considerate, a superb
								dentist, and always explains problems and
								procedures thoroughly. His Staff is very
								personable, and efficient. The hygienists are
								all gentle and thorough. You can't do better
								than Dr.Lee,to take good care of your teeth, in
								a caring and professional manner!
								<br />
								M.S.
							</p>
						</div>
						{/*<div className="flex justify-center w-1/6"> <img src={backward} alt='previous testimonial' /> </div>*/}
					</div>
				</div>
			</section>
		</>
	);
};

export default S6testinomial;
