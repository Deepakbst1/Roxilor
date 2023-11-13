import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../redux/productReducer";
import Filter from "./Filter";

function Products() {
  let dispatch = useDispatch();

  let values = useSelector((state) => state.product);

  return (
    <>
      <div className="container-fluid product_table">
        <div
          className="text-white your-orders-title text-center"
          style={{ height: "3em", backgroundColor: "Black" }}
        >
          <h2>Transaction Dashboard</h2>
        </div>

        <div>
          <Filter />
        </div>
        <div className="table_Details" >
          <Table bordered className="mt-2 text-center " >
            <thead className="text-danger" >
              <tr >
                <th style={{ backgroundColor: "Yellow" ,border:"2px solid black" , borderRadius:"2px"}}>
                  <b > ID </b>
                </th>
                <th style={{ backgroundColor: "Yellow" ,border:"2px solid black"}}>
                  <b>Title</b>
                </th>
                <th style={{ backgroundColor: "Yellow" ,border:"2px solid black"}}>
                  <b>Description</b>
                </th>
                <th style={{ backgroundColor: "Yellow" ,border:"2px solid black"}}>
                  <b>Price</b>
                </th>
                <th style={{ backgroundColor: "Yellow" ,border:"2px solid black"}}>
                  <b>Category</b>
                </th >
                <th style={{ backgroundColor: "Yellow" ,border:"2px solid black"}}>
                  <b>Sold</b>
                </th>
                <th style={{ backgroundColor: "Yellow" ,border:"2px solid black"}}>
                  <b>Image</b>
                </th>
              </tr>
            </thead>
            <tbody className="text-white" >
              {values.products.map((e, i) => {
                return (
                  <tr key={i}>
                    <td style={{ backgroundColor: "Yellow" ,border:"2px solid black"}}>{e.id}</td>
                    <td style={{ backgroundColor: "Yellow" ,border:"2px solid black"}}>{e.title}</td>
                    <td style={{ backgroundColor: "Yellow" ,border:"2px solid black"}}>{e.description}</td>
                    <td style={{ backgroundColor: "Yellow" ,border:"2px solid black"}}>{e.price}</td>
                    <td style={{ backgroundColor: "Yellow" ,border:"2px solid black"}}>{e.category}</td>
                    <td style={{ backgroundColor: "Yellow" ,border:"2px solid black"}}>{e.sold ? "YES" : "No"}</td>
                    <td style={{ backgroundColor: "Yellow" ,border:"2px solid black"}}>
                      <img
                        style={{ width: "5em", height: "5em" }}
                        src={e.image}
                        alt=""
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>

    </>
  );
}

export default Products;
