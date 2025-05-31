/* /* /* "use client";

import { navItems } from "@/data";
import AssistantAvatar from "@/components/AssistantAvatar";
//import Hero from "@/components/Hero";
//import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
//import Clients from "@/components/Clients";
//import Approach from "@/components/Approach";
//import Experience from "@/components/Experience";
//import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ComplianceUploads from "@/components/ComplianceUploads";
import CClients from "@/components/ComplianceCarousal";
import Timeline from "@/components/Timeline";
import TimelinePhase from "@/components/TimelinePhase";
import ConstructionPhaseCards from "@/components/cphase"; 
import ComplianceGraphs from "@/components/ComplianceGraph";
import Heroes from "@/components/Heroes";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
    	<Heroes/>
		<AssistantAvatar />
		<ComplianceUploads />
        <CClients/>
		<Timeline/>
        <TimelinePhase/>
		<ConstructionPhaseCards/>
		<ComplianceGraphs/>
        <Footer />
      </div>
    </main>
  );
};

export default Home;


/*
//    <Hero />
    //    <Grid />
	//	<RecentProjects />
	//	<Clients />
	//	<Experience />
	//	<Approach />

*/ 



/* "use client";

import { navItems } from "@/data";
import AssistantAvatar from "@/components/AssistantAvatar";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ComplianceUploads from "@/components/ComplianceUploads";
import CClients from "@/components/ComplianceCarousal";
import Timeline from "@/components/Timeline";
import TimelinePhase from "@/components/TimelinePhase";
import ConstructionPhaseCards from "@/components/cphase"; 
import ComplianceGraphs from "@/components/ComplianceGraph";
import Heroes from "@/components/Heroes";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <section id="hero">
          <Heroes />
        </section>

        <AssistantAvatar />

        <section id="compliance-uploads">
          <ComplianceUploads />
        </section>

        <section id="compliance-carousel">
          <CClients />
        </section>

        <section id="timeline">
          <Timeline />
        </section>

        <section id="timeline-phase">
          <TimelinePhase />
        </section>

        <section id="phase-cards">
          <ConstructionPhaseCards />
        </section>

        <section id="compliance-graph">
          <ComplianceGraphs />
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default Home;


 */
/*
// app/page.tsx/*
"use client";

import { navItems } from "@/data";
import AssistantAvatar from "@/components/AssistantAvatar";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ComplianceUploads from "@/components/ComplianceUploads";
import CClients from "@/components/ComplianceCarousal";
import Timeline from "@/components/Timeline";
import TimelinePhase from "@/components/TimelinePhase";
import ConstructionPhaseCards from "@/components/cphase";
import ComplianceGraphs from "@/components/ComplianceGraph";
import Heroes from "@/components/Heroes";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <section id="hero">
          <Heroes />
        </section>

        <AssistantAvatar />

        <section id="compliance-uploads">
          <ComplianceUploads />
        </section>

        <section id="compliance-carousel">
          <CClients />
        </section>

        <section id="timeline">
          <Timeline />
        </section>

        <section id="timeline-phase">
          <TimelinePhase />
        </section>

        <section id="phase-cards">
          <ConstructionPhaseCards />
        </section>

        <section id="compliance-graph">
          <ComplianceGraphs />
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default Home;

//------
/* 
import dynamic from "next/dynamic";
import { navItems } from "@/data";
import FloatingNav from "@/components/ui/FloatingNavbar";
import AssistantAvatar from "@/components/AssistantAvatar";
import Heroes from "@/components/Heroes";
import ComplianceUploads from "@/components/ComplianceUploads";
import CClients from "@/components/ComplianceCarousal";
import Timeline from "@/components/Timeline";
import TimelinePhase from "@/components/TimelinePhase";
import ConstructionPhaseCards from "@/components/cphase";
import ComplianceGraphs from "@/components/ComplianceGraph";
import Footer from "@/components/Footer";

// Dynamically load 3D scene without SSR
const CityBackdrop = dynamic(() => import("@/components/CityBackdrop"), { ssr: false });

const Home = () => {
  return (
    <>
      {/* 3D City Backdrop as Visual Background }
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <CityBackdrop />
      </div>

      {/* Main Content Overlay }
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//        <div className="max-w-7xl w-full">
  //        <FloatingNav navItems={navItems} />

          <section id="hero"><Heroes /></section>
          <AssistantAvatar />
          <section id="compliance-uploads"><ComplianceUploads /></section>
          <section id="compliance-carousel"><CClients /></section>
          <section id="timeline"><Timeline /></section>
          <section id="timeline-phase"><TimelinePhase /></section>
          <section id="phase-cards"><ConstructionPhaseCards /></section>
          <section id="compliance-graph"><ComplianceGraphs /></section>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;




 */
 
 /*
 
 "use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";
import {FloatingNav} from "@/components/ui/FloatingNavbar";
import AssistantAvatar from "@/components/AssistantAvatar";
import Heroes from "@/components/Heroes";
import ComplianceUploads from "@/components/ComplianceUploads";
import CClients from "@/components/ComplianceCarousal";
import Timeline from "@/components/Timeline";
import TimelinePhase from "@/components/TimelinePhase";
import ConstructionPhaseCards from "@/components/cphase";
import ComplianceGraphs from "@/components/ComplianceGraph";
import Footer from "@/components/Footer";

// Dynamically load 3D City Scene
const CityBackdrop = dynamic(() => import("@/components/CityBackdrop"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      {/* 3D city backdrop }
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <CityBackdrop />
      </div>

      <main className="relative flex flex-col justify-center items-center bg-black-100 overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />

          <section id="hero">
            <Heroes />
          </section>

          <AssistantAvatar />

          <section id="compliance-uploads">
            <ComplianceUploads />
          </section>

          <section id="compliance-carousel">
            <CClients />
          </section>

          <section id="timeline">
            <Timeline />
          </section>

          <section id="timeline-phase">
            <TimelinePhase />
          </section>

          <section id="phase-cards">
            <ConstructionPhaseCards />
          </section>

          <section id="compliance-graph">
            <ComplianceGraphs />
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
 */
 
 
 
 //--
 
 
 /* 
 "use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import AssistantAvatar from "@/components/AssistantAvatar";
import Heroes from "@/components/Heroes";
import ComplianceUploads from "@/components/ComplianceUploads";
import CClients from "@/components/ComplianceCarousal";
import Timeline from "@/components/Timeline";
import TimelinePhase from "@/components/TimelinePhase";
import ConstructionPhaseCards from "@/components/cphase";
import ComplianceGraphs from "@/components/ComplianceGraph";
import Footer from "@/components/Footer";
/*

 {/* Fixed 3D city backdrop}
      
	  <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none">
		<CityBackdrop />
	  </div>







/* <div className="fixed inset-0 -z-50 pointer-events-none">
        <CityBackdrop />
      </div> 
// Dynamically load 3D background
const CityBackdrop = dynamic(() => import("@/components/CityBackdrop"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
     


      {/* Main page layout}
      <main className="relative flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto bg-black-100 mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <section id="hero"><Heroes /></section>
          <AssistantAvatar />
          <section id="compliance-uploads"><ComplianceUploads /></section>
          <section id="compliance-carousel"><CClients /></section>
          <section id="timeline"><Timeline /></section>
          <section id="timeline-phase"><TimelinePhase /></section>
          <section id="phase-cards"><ConstructionPhaseCards /></section>
          <section id="compliance-graph"><ComplianceGraphs /></section>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
 
  */
 
 //------
 
 /* 
 
 "use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
//import AssistantAvatar from "@/components/AssistantAvatar";
//import Heroes from "@/components/Heroes";
import ComplianceUploads from "@/components/ComplianceUploads";
import CClients from "@/components/ComplianceCarousal";
import Timeline from "@/components/Timeline";
import TimelinePhase from "@/components/TimelinePhase";
import ConstructionPhaseCards from "@/components/cphase";
import ComplianceGraphs from "@/components/ComplianceGraph";
import Footer from "@/components/Footer";
//import CityBackdrop from "@components/CityBackdrop";
//import VantaTrunk from "@/components/VantaTrunk";

// Dynamically load 3D background (client-side only)
/*const CityBackdrop = dynamic(() => import("@/components/CityBackdrop"), {
  ssr: false,
});
 {/* Background container (z-[-50], pointer-events-none ensures no interference) }
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <VantaTrunk />
      </div>



const AssistantAvatar = dynamic(() => import("@/components/AssistantAvatar"), {
  ssr: false,
});

const Heroes = dynamic(() => import("@/components/Heroes"), {
  ssr: false,
});


const Home = () => {
  return (
    <>
    
      {/* Main page layout }
      <main className="relative flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto bg-black-100 mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <section id="hero"><Heroes /></section>
          <AssistantAvatar />
          <section id="compliance-uploads"><ComplianceUploads /></section>
          <section id="compliance-carousel"><CClients /></section>
          <section id="timeline"><Timeline /></section>
          <section id="timeline-phase"><TimelinePhase /></section>
          <section id="phase-cards"><ConstructionPhaseCards /></section>
          <section id="compliance-graph"><ComplianceGraphs /></section>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
 */
 
 
/*  
 "use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ComplianceUploads from "@/components/ComplianceUploads";
import CClients from "@/components/ComplianceCarousal";
import Timeline from "@/components/Timeline";
import TimelinePhase from "@/components/TimelinePhase";
import ConstructionPhaseCards from "@/components/cphase";
import ComplianceGraphs from "@/components/ComplianceGraph";
import Footer from "@/components/Footer";

// Lazy-load heavier visual components
const Heroes = dynamic(() => import("@/components/Heroes"), { ssr: false });
const AssistantAvatar = dynamic(() => import("@/components/AssistantAvatar"), { ssr: false });
const CityBackdrop = dynamic(() => import("@/components/CityBackdrop"), { ssr: false });

const Home = () => {
  return (
    <>
      {/* 3D animated city background }
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <CityBackdrop />
      </div>

      <main className="relative flex flex-col justify-center items-center bg-black-100 overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />

          <section id="hero"><Heroes /></section>
          <AssistantAvatar />

          <section id="compliance-uploads"><ComplianceUploads /></section>
          <section id="compliance-carousel"><CClients /></section>
          <section id="timeline"><Timeline /></section>
          <section id="timeline-phase"><TimelinePhase /></section>
          <section id="phase-cards"><ConstructionPhaseCards /></section>
          <section id="compliance-graph"><ComplianceGraphs /></section>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
 */
 
 
 
 
 
 "use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// Lazy-load all components with SSR disabled to avoid document/window errors
const Heroes = dynamic(() => import("@/components/Heroes"), { ssr: false });
const AssistantAvatar = dynamic(() => import("@/components/AssistantAvatar"), { ssr: false });
const CityBackdrop = dynamic(() => import("@/components/CityBackdrop"), { ssr: false });
const ComplianceUploads = dynamic(() => import("@/components/ComplianceUploads"), { ssr: false });
const CClients = dynamic(() => import("@/components/ComplianceCarousal"), { ssr: false });
const Timeline = dynamic(() => import("@/components/Timeline"), { ssr: false });
const TimelinePhase = dynamic(() => import("@/components/TimelinePhase"), { ssr: false });
const ConstructionPhaseCards = dynamic(() => import("@/components/cphase"), { ssr: false });
const ComplianceGraphs = dynamic(() => import("@/components/ComplianceGraph"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const Home = () => {
  return (
    <>
      {/* 3D animated city background */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <CityBackdrop />
      </div>

      <main className="relative flex flex-col justify-center items-center bg-black-100 overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />

          <section id="hero"><Heroes /></section>
          <AssistantAvatar />

          <section id="compliance-uploads"><ComplianceUploads /></section>
          <section id="compliance-carousel"><CClients /></section>
          <section id="timeline"><Timeline /></section>
          <section id="timeline-phase"><TimelinePhase /></section>
          <section id="phase-cards"><ConstructionPhaseCards /></section>
          <section id="compliance-graph"><ComplianceGraphs /></section>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
