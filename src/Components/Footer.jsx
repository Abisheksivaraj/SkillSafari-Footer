import React from "react";
import logo from "../assets/skillsafariimg.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[white] w-[100vw] h-[100vh] overflow-x-hidden">
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 text-3xl font-[600] mt-[13rem] ml-11">
          We Let <br />
          The Numbers <br /> Speak For Us
        </div>
        <div class="col-span-1 ...">
          <p className="text-[#fb9a34] font-medium text-3xl">
            5 million+ lines
          </p>
          <p className=" text-[black] text-base font-normal">
            Our students and team have collectively written over 5 <br />
            million lines of code. That is more than enough to fill our <br />{" "}
            webpage 100 times with content.
          </p>
        </div>
        <div class="col-span-1 ...">
          <p className="text-[#1c2042] font-medium text-3xl">10000+ hours</p>
          <br />

          <p className=" text-[black] text-base font-normal">
            Our mentors love teaching, and an attestation to that is <br /> over
            10000 hours of experience in teaching. They <br /> spend their time
            crafting the students to create a better <br />
            future.
          </p>
        </div>
        <div class="col-span-1 ...">
          <p className="text-[#1c2042] font-medium text-3xl">400+ students</p>
          <br />

          <p className="text-base font-normal text-[black]">
            We train over 400 students every day and sculpt future <br />
            leaders.
          </p>
        </div>
        <div class="col-span-1 ...">
          <p className="text-[#4b3794] font-medium text-3xl">600+ projects</p>
          <br />

          <p className="text-base font-normal text-[black]">
            Our students have over 600 projects to their name. An <br />
            indication of their skill and talent.
          </p>
        </div>
        <div class="col-span-1 ...">
          <p className="text-[#f0256f] font-medium text-3xl">
            4.6 out of 5 rating
          </p>
          <br />

          <p className="text-base font-normal text-[black]">
            How have our students rated us? 4.6 out 5, that is how <br /> good
            we are according to our students.
          </p>
        </div>
        <div class="col-span-1 ...">
          <p className="text-[#f0256f] font-medium text-3xl">14000+ students</p>
          <br />

          <p className="text-base font-normal text-[black]">
            Our mentors have trained over 14000 students, which <br />
            is a testament to their skills.
          </p>
        </div>
      </div>

      <div className="bg-[#e8f3fa] h-[22rem] relative">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-5 ">
            <img src={logo} alt="" className="absolute mt-9 ml-6" />
            <p className="mt-20 ml-6">
              Join us at Skill Safari as we rush into the new era of e- <br />
              learning, where boring classroom education is not the <br />{" "}
              ruler. We are here to provide you with knowledge and <br />
              skills that make you think and help you build a new and <br />{" "}
              better future.
            </p>
          </div>
          <div class="col-span-2 mt-9">
            <span className="font-semibold">Courses</span>
            <div>
              <ul>
                <li className="hover:text-[orange] cursor-pointer mt-2">
                  Full Stack Developer <br /> course
                </li>
                <li className="hover:text-[orange] cursor-pointer mt-3">
                  Learning Hub
                </li>
              </ul>
            </div>
          </div>
          <div class="col-span-2 mt-9">
            <span className="font-semibold">Quicklinks</span>
            <ul>
              
              <li className="hover:text-[orange] cursor-pointer mt-3">
                Community
              </li>
              <li className="hover:text-[orange] cursor-pointer mt-3">
                Hire From US
              </li>
              <li className="hover:text-[orange] cursor-pointer mt-3">
                Become Campus Ambassador
              </li>
              <li className="hover:text-[orange] cursor-pointer mt-3">
                Careers
              </li>
            </ul>
          </div>
          <div class="col-span-2 mt-9">
            <span className="font-semibold">Company</span>
            <ul>
              <li className="hover:text-[orange] cursor-pointer mt-3">
                About Us
              </li>
              <li className="hover:text-[orange] cursor-pointer mt-3">
                Our Vision
              </li>
              <li className="hover:text-[orange] cursor-pointer mt-3">
                Terms And Conditions
              </li>
              <li className="hover:text-[orange] cursor-pointer mt-3">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 mt-10 ml-6 ">
          <div className="h-11 w-10 bg-[#ffffff] p-3 text-[#0095ff] hover:text-[orange] cursor-pointer rounded-lg">
            <FaFacebookF />
          </div>
          <div className="h-10 w-11 bg-[#ffffff] p-3 text-[#0095ff] hover:text-[orange] cursor-pointer rounded-lg">
            <FaInstagram />
          </div>
          <div className="h-10 w-11 bg-[#ffffff] p-3 text-[#0095ff] hover:text-[orange] cursor-pointer rounded-lg">
            <FaTwitter />
          </div>
          <div className="h-10 w-11 bg-[#ffffff] p-3 text-[#0095ff] hover:text-[orange] cursor-pointer rounded-lg">
            <FaLinkedinIn />
          </div>
          <div className="h-10 w-11 bg-[#ffffff] p-3 text-[#0095ff] hover:text-[orange] cursor-pointer rounded-lg">
            <FaYoutube />
          </div>
        </div>

        <p className="text-center mt-6 text-[gray]">
          Copyright© 2022 Skill Safari All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
