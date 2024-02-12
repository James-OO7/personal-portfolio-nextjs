"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [startTransition, isPending] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
    <section className='text-white '>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about+section.png" width={400} height={400} alt='about-section'/>
            <div>
                <h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
                <p className='text-base md:text-lg'>
                   I'm a <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F17B41] to-[#CD4BC9]'>Software Engineer</span> dedicated to improving skills through hands-on learning and development work. 
                   Proficient in mobile and desktop development environments. Adept at using HTML5, JavaScript, and other 
                   programming languages to produce clean code. Well-organized and collaborative team player with strong 
                   communication and analytical abilities. 
                </p>
                <div className='flex flex-row mt-8'>
                    <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500'>Skills</span>
                    <span>Education</span>
                    <span>Experience</span>
                </div>
            </div>
        </div>
    </section>
)};

export default AboutSection