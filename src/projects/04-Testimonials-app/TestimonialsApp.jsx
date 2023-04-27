import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export default function TestimonialsApp() {
  //   const handleClick = () => {
  //     console.log("My Click");
  //   };
  const [testimonials, setTestimonials] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <div className="container m-auto">
      <Title text="Testimonials App" />
      <Button
        text={"Posts"}
        btnClass="btn-info"
        icon={<BsFillFileEarmarkPostFill className="mr-1" />}
        onClick={() => setTestimonials("Posts")}
      />
      <Button
        text="Users"
        btnClass="btn-info"
        icon={<FaUserAlt className="mr-1" />}
        onClick={() => setTestimonials("Users")}
      />
      <Button
        text="Comments"
        btnClass="btn-info"
        icon={<BiCommentDetail className="mr-1" />}
        onClick={() => setTestimonials("Comments")}
      />
      <Title
        classes={"subtitle text-primary"}
        text={!testimonials ? "Select from above!" : testimonials}
      />
      {!items
        ? null
        : items.map((item) => {
            return (
              <div className="card card-primary mb-2" key={item.id}>
                {item.name}
              </div>
            );
          })}
    </div>
  );
}
