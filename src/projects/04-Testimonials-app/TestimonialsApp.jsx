import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

export default function TestimonialsApp() {
  return (
    <div className="container m-auto">
      <Title text="Testimonials App" />
      <Button
        text={"Posts"}
        btnClass="btn-info"
        icon={<BsFillFileEarmarkPostFill />}
      />
      <Button btnClass="btn-info" icon={<FaUserAlt />} />
    </div>
  );
}
