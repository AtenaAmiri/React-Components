import React from "react";
import Alert from "../components/Alert";

export default function AlertApp() {
  return (
    <div className="container mx-auto">
      <Alert type={"success"} message={"Successful login"} />
      <Alert type={"danger"} message={"Warning!"} />
      <Alert
        type={"info"}
        message={"Time triggered"}
        delay={true}
        delayTime={2000}
      />
    </div>
  );
}
