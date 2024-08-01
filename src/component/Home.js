import React from 'react'
import MyNavbar from './Navbar'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ToastContainer, toast } from "react-toastify";
import seal from '../asses/image/image-asset.jpeg'
import seal1 from '../asses/image/colorful-clothes-on-hangers-against-white-background-2MKDY06.jpg'
import seal2 from '../asses/image/D-1.0-18072024-UHP-MainBanner-RHS-Z1-Golive-Revised.webp'
import { ProgressSpinner } from "primereact/progressspinner";
import '../asses/style/style.css'
import Contact from './contact';
import Footer from './Footer';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);
  const notify = () =>
    toast.success("Successfully Added In cart", {
      autoClose: 2000,
      position: "top-center",
    });
  const notifyerror = () =>
    toast.error("Already Added In cart", { autoClose: 2000 });

  const addtocart = (item) => {
    let arr = JSON.parse(localStorage.getItem("ecommercedata")) || [];
    let found = arr.some((ele) => ele.id === item.id);
    if (found) {
      notifyerror();
    } else {
      arr.push(item);
      localStorage.setItem("ecommercedata", JSON.stringify(arr));
      notify();
      window.location.reload()
    }
  };


  const getData = async () => {
    try {
      setLoading(true);
      let apidata = await axios.get(
        "https://renderjsondata.onrender.com/men"
      );
      setData(apidata.data);
      console.log(apidata.data);
      setLoading(false)

    } catch (error) {
      console.log(error);
    }
  };

  // const deldata = async (id) => {
  //     try {
  //         let res = axios.delete(
  //             `https://renderjsondata.onrender.com/men/${id}`
  //         );
  //         alert("deleted successfully");
  //         getData();
  //     } catch (error) {
  //         console.log(error);
  //     }
  // };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <MyNavbar />
      <div class="mb-5">
      </div>
      <div className="text-center mt-0 text-danger offers"><h1>Super Hours 12AM - 6AM Everday Assentials</h1></div>
      <div className='mb-2'></div>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={seal} alt='seal' style={{ height: '500px', width: "100%" }} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={seal1} alt='seal' style={{ height: '500px', width: "100%" }} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={seal2} alt='seal' style={{ height: '500px', width: "100%" }} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="box">
        <ToastContainer />
        {loading ? (
          <div className="text-center">
            <ProgressSpinner />
          </div>
        ) : (
          <div className=" grid w-100  ">
            {data.map((ele) => {
              return (
                <div className=" px-2 card p-2 mx-auto griddiv ">
                  <img src={ele.image} alt="" />
                  <p className="pt-4">{`${ele.name ? ele.name.slice(1, 25) : null
                    } ......`}</p>
                  <p> $ {ele.price ? ele.price : "99.99"}</p>
                  <p>{ele.rating}</p>
                  <div className="d-flex gap-2  ">
                    <button
                      onClick={() => addtocart(ele)}
                      className="btn btn-secondary ">
                      Add To Cart
                    </button>
                    <button className="btn btn-warning">
                      Add To Favourite
                    </button>
                    {/* <button onClick={() => deldata(ele.id)}>
                                    delete
                                </button> */}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
