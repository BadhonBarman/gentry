import anime from 'animejs';
import React, { useEffect, useState } from 'react';



export default function OurTeam() {


  const teamMembers = [
    { id: 1, name: "Asadot Daullah", title: "Managing Director", imagePath: "images/team/asadot_daullah.jpg", hoverImagePath: "images/team/asadot_daullah.jpg" },
    { id: 2, name: "Mohammad Abu Torab", title: "Director", imagePath: "images/team/mohammad_abu_torab.jpg", hoverImagePath: "images/team/mohammad_abu_torab.jpg" },
    { id: 3, name: "Rezaul Hasan", title: "Director", imagePath: "images/team/rezaul_hasan.jpg", hoverImagePath: "images/team/rezaul_hasan_hover.jpg" },
    { id: 4, name: "William Amitav Dobey", title: "Deputy General Manager", imagePath: "images/team/william_amitav_dobey.jpg", hoverImagePath: "images/team/william_amitav_dobey_hover.jpg" },
    { id: 5, name: "Golam Mostofa Sumon", title: "Asst. General Manager, Marketing", imagePath: "images/team/golam_mostafa_sumon.jpg", hoverImagePath: "images/team/golam_mostafa_sumon_hover.jpg" },
    { id: 6, name: "Mohammad Arifur Rahman", title: "Asst. Manager-Sales", imagePath: "images/team/mohammad_arifur_rahman.jpg", hoverImagePath: "images/team/mohammad_arifur_rahman_hover.jpg" },
    { id: 7, name: "Md. A. J. Pahlowan", title: "Asst. Manager-Sales", imagePath: "images/team/md_a_j_pahlawan.png", hoverImagePath: "images/team/md_a_j_pahlawan_hover.jpg" },
    { id: 8, name: "Md. Hasiur Rahman Hadi", title: "Asst. Manager-Sales", imagePath: "images/team/md_hasiur_rahman_hadi.jpg", hoverImagePath: "images/team/md_hasiur_rahman_hadi_hover.jpg" },
    { id: 9, name: "Nurul Karim", title: "Sr. Officer-Sales", imagePath: "images/team/nurul_karim.jpg", hoverImagePath: "images/team/nurul_karim_hover.jpg" },
    { id: 10, name: "Md. Sheikh Nobi Uddin", title: "Officer, Marketing", imagePath: "images/team/md_sheikh_nobi.jpg", hoverImagePath: "images/team/md_sheikh_nobi_hover.jpg" },
    { id: 11, name: "Naim Mahmud", title: "Officer, Marketing", imagePath: "images/team/naim_mahmud.jpg", hoverImagePath: "images/team/naim_mahmud_hover.jpg" },
    { id: 12, name: "Albab Tanim", title: "Manager-Business Development", imagePath: "images/team/alabab_tanim.jpeg", hoverImagePath: "images/team/alabab_tanim_hover.jpeg" },
  ];

  const [hoveredMemberId, setHoveredMemberId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredMemberId(id);
  };

  const handleMouseLeave = () => {
    setHoveredMemberId(null);
  };
  
  console.log(hoveredMemberId)
  useEffect(() => {
    anime({
      targets: '.page-title',
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 1200,
      delay: 0,
      easing: 'easeOutQuad',
      stagger: 150,
    });
  }, []);

  return (
    <>
      <section className="pb-12 sm:pb-50px position-relative overflow-hidden">
        <div className="page-title position-absolute bottom-minus-40px lg-bottom-minus-20px text-center w-100 fs-250 xxl-fs-200 xl-fs-180 lg-fs-140 d-none d-md-block text-gradient-light-green-white z-index-minus-2 ls-minus-8px fw-700 appear anime-complete">
          Our Team
        </div>
      </section>

      <section className="py-0 ps-7 pe-7 xl-ps-5 xl-pe-5 lg-ps-3 lg-pe-3 xs-ps-15px xs-pe-15px mt-1 mb-5">
      <div className="overflow-hidden bg-very-light-green border-radius-20px lg-border-radius-0px pt-7 pb-7 lg-pt-5 lg-pb-5 lg-ps-3 lg-pe-3 sm-pt-50px sm-pb-50px">
      <div className="container">
  <div className="row align-items-center mb-5 sm-mb-9 text-center text-md-start justify-content-center">
    <div className="col-lg-5 col-md-6 md-mb-20px" style={{ textAlign: "center" }}>
      <span className="fs-16 text-uppercase text-base-color fw-600 mb-5px d-block">Our Team</span>
      <h3 className="text-dark-gray fw-700 mb-0 ls-minus-1px">Leadership Team</h3>
    </div>
  </div>

  {/* Row 1 */}
  <div className="row align-items-center mb-5 xs-mb-30px">
    {teamMembers.slice(0, 1).map((member) => (
      <div key={member.id} className="col-12 text-center">
        <div className={`team-container${member.id} mx-auto mb-3`}
        >
          <img
            style={
              hoveredMemberId === member.id
                ? { position: 'relative', zIndex: 10, opacity: 0, borderRadius: '25px', transition: 'opacity 0.4s ease-in-out'  }
                : { borderRadius: '25px', opacity: 1, transition: 'opacity 0.4s ease-in-out' }
            }
            id={`team${member.id}`}
            src={`${member.imagePath}`}
            className={`${hoveredMemberId === member.id ? 'hidden relative z-10':''}`}
            alt={member.name}
            data-no-retina
          />
        </div>
        <h5 className="text-dark-gray fw-600">{member.name}</h5>
        <p className="text-gray fw-400 font-20px" style={{ marginTop: "-20px" }}>
          {member.title}
        </p>
      </div>
    ))}
  </div>

  {/* Row 2 */}
  <div className="row align-items-center mb-5 xs-mb-30px justify-content-center">
    {teamMembers.slice(1, 3).map((member) => (
      <div key={member.id} className="col-md-5 text-center">
        <div className={`team-container${member.id} mx-auto mb-3`}
        >
          <img
            style={
              hoveredMemberId === member.id
                ? { position: 'relative', zIndex: 10, opacity: 0, borderRadius: '25px', transition: 'opacity 0.4s ease-in-out'  }
                : { borderRadius: '25px', opacity: 1, transition: 'opacity 0.4s ease-in-out' }
            }
            id={`team${member.id}`}
            src={`${member.imagePath}`}
            className={`${hoveredMemberId === member.id ? 'hidden relative z-10':''}`}
            alt={member.name}
            data-no-retina
          />

  

        </div>
        <h5 className="text-dark-gray fw-600">{member.name}</h5>
        <p className="text-gray fw-400 font-20px" style={{ marginTop: "-20px" }}>
          {member.title}
        </p>
      </div>
    ))}
  </div>

  {/* Row 3 */}
  <div className="row align-items-center mb-5  xs-mb-30px">
    {teamMembers.slice(3, 7).map((member) => (
      <div key={member.id} className="col-xl-3 col-lg-6 col-md-6 col-sm-6 text-center mb-4 md-mb-30px">
         <div className={`team-container${member.id} mx-auto mb-3`}
        onMouseEnter={() => handleMouseEnter(member.id)}
        onMouseLeave={handleMouseLeave}
        >
          <img
            style={
              hoveredMemberId === member.id
                ? { position: 'relative', zIndex: 10, opacity: 0, borderRadius: '25px', transition: 'opacity 0.4s ease-in-out'  }
                : { borderRadius: '25px', opacity: 1, transition: 'opacity 0.4s ease-in-out' }
            }
            id={`team${member.id}`}
            src={`${member.imagePath}`}
            className={`${hoveredMemberId === member.id ? 'hidden relative z-10':''}`}
            alt={member.name}
            data-no-retina
          />

          <img
            style={hoveredMemberId === member.id ? { borderRadius: "25px", opacity: 1, top:0, position:'absolute', right:0, zIndex:10, transition: 'opacity 0.4s ease-in-out'  }:
              { borderRadius: "25px", opacity: 0, top:0, position:'absolute', right:0, zIndex:10, transition: 'opacity 0.4s ease-in-out'  }}
            id={`hoverTeam${member.id}`}
            src={member.hoverImagePath}
            alt={`${member.name} Hover`}
            data-no-retina
          />

        </div>
        <h5 className="text-dark-gray fw-600" style={{ minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {member.name === 'Md. A. J. Pahlawan' ? 
            <>Md. A. J.<br />Pahlawan</> : 
            member.name
          }
        </h5>
        <p className="text-gray fw-400 font-20px" style={{ marginTop: "-20px", minHeight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {member.title}
        </p>
      </div>
    ))}
  </div>

  {/* Row 4 */}
  <div className="row align-items-center mb-5 xs-mb-30px justify-content-center">
    {teamMembers.slice(7, 10).map((member) => (
      <div key={member.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 text-center mb-4 md-mb-30px">
        <div className={`team-container${member.id} mx-auto mb-3`}
        onMouseEnter={() => handleMouseEnter(member.id)}
        onMouseLeave={handleMouseLeave}
        >
          <img
            style={
              hoveredMemberId === member.id
                ? { position: 'relative', zIndex: 10, opacity: 0, borderRadius: '25px', transition: 'opacity 0.4s ease-in-out'  }
                : { borderRadius: '25px', opacity: 1, transition: 'opacity 0.4s ease-in-out' }
            }
            id={`team${member.id}`}
            src={`${member.imagePath}`}
            className={`${hoveredMemberId === member.id ? 'hidden relative z-10':''}`}
            alt={member.name}
            data-no-retina
          />

          <img
            style={hoveredMemberId === member.id ? { borderRadius: "25px", opacity: 1, top:0, position:'absolute', right:0, zIndex:10, transition: 'opacity 0.4s ease-in-out'  }:
              { borderRadius: "25px", opacity: 0, top:0, position:'absolute', right:0, zIndex:10, transition: 'opacity 0.4s ease-in-out'  }}
            id={`hoverTeam${member.id}`}
            src={member.hoverImagePath}
            alt={`${member.name} Hover`}
            data-no-retina
          />

        </div>
        <h5 className="text-dark-gray fw-600" style={{ minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{member.name}</h5>
        <p className="text-gray fw-400 font-20px" style={{ marginTop: "-20px", minHeight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {member.title}
        </p>
      </div>
    ))}
  </div>

  {/* Row 5 */}
  <div className="row align-items-center mb-5 xs-mb-30px justify-content-center">
    {teamMembers.slice(10, 12).map((member) => (
      <div key={member.id} className="col-xl-5 col-lg-6 col-md-6 col-sm-6 text-center mb-4 md-mb-30px">
        <div className={`team-container${member.id} mx-auto mb-3`}
        onMouseEnter={() => handleMouseEnter(member.id)}
        onMouseLeave={handleMouseLeave}
        >
          <img
            style={
              hoveredMemberId === member.id
                ? { position: 'relative', zIndex: 10, opacity: 0, borderRadius: '25px', transition: 'opacity 0.4s ease-in-out'  }
                : { borderRadius: '25px', opacity: 1, transition: 'opacity 0.4s ease-in-out' }
            }
            id={`team${member.id}`}
            src={`${member.imagePath}`}
            className={`${hoveredMemberId === member.id ? 'hidden relative z-10':''}`}
            alt={member.name}
            data-no-retina
          />

          <img
            style={hoveredMemberId === member.id ? { borderRadius: "25px", opacity: 1, top:0, position:'absolute', right:0, zIndex:10, transition: 'opacity 0.4s ease-in-out'  }:
              { borderRadius: "25px", opacity: 0, top:0, position:'absolute', right:0, zIndex:10, transition: 'opacity 0.4s ease-in-out'  }}
            id={`hoverTeam${member.id}`}
            src={member.hoverImagePath}
            alt={`${member.name} Hover`}
            data-no-retina
          />

        </div>
        <h5 className="text-dark-gray fw-600" style={{ minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{member.name}</h5>
        <p className="text-gray fw-400 font-20px" style={{ marginTop: "-20px", minHeight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {member.title}
        </p>
      </div>
    ))}
  </div>


</div>

</div>

      </section>
    </>
  );
}
