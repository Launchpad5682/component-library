import React from "react";
import "../styles/Body.css";
import Button from "./Button";
import ButtonHeading from "./ButtonHeading";
import Footer from "./Footer";

function Body() {
  return (
    <article>
      <h2>Buttons</h2>
      <div className="btn-class">
        <div className="row-1">
          <span>
            <ButtonHeading text="&lt;Button /&gt;" />
            <Button />
          </span>
        </div>
        <div className="row-2">
          <span>
            <ButtonHeading text='&lt;Button variant="outline"/&gt;' />
            <Button variant="outline" />
          </span>
        </div>
        <div className="row-3">
          <span>
            <ButtonHeading text='&lt;Button variant="text"/&gt;' />
            <Button variant="text" />
          </span>
        </div>
        <div className="row-4">
          <span>
            <ButtonHeading text="&lt;Button disabled/&gt;" />
            <Button disabled />
          </span>
          <span>
            <ButtonHeading text='&lt;Button disabled variant="text"/&gt;' />
            <Button disabled variant="text" />
          </span>
        </div>
        <div className="row-5">
          <span>
            <ButtonHeading text='&lt;Button startIcon="local_grocery_store"/&gt;' />
            <Button startIcon="local_grocery_store" color="primary" />
          </span>
          <span>
            <ButtonHeading text='&lt;Button endIcon="local_grocery_store"/&gt;' />
            <Button endIcon="local_grocery_store" color="primary" />
          </span>
        </div>
        <div className="row-7">
          <span>
            <ButtonHeading text='&lt;Button size="sm"/&gt;' />
            <Button size="sm" />
          </span>
          <span>
            <ButtonHeading text='&lt;Button size="md"/&gt;' />
            <Button size="md" />
          </span>
          <span>
            <ButtonHeading text='&lt;Button size="lg"/&gt;' />
            <Button size="lg" />
          </span>
        </div>
        <div className="row-8">
          <span>
            <ButtonHeading text='&lt;Button color="default"/&gt;' />
            <Button color="default" />
          </span>
          <span>
            <ButtonHeading text='&lt;Button color="primary"/&gt;' />
            <Button color="primary" />
          </span>
          <span>
            <ButtonHeading text='&lt;Button color="secondary"/&gt;' />
            <Button color="secondary" />
          </span>
          <span>
            <ButtonHeading text='&lt;Button color="danger"/&gt;' />
            <Button color="danger" />
          </span>
        </div>
        <Footer />
      </div>
    </article>
  );
}

export default Body;
