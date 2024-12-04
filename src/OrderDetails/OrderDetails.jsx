import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import Slideshow from '../test';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const ssss = useNavigate();

  return (
    <Container className="my-5">
      <Row>
        {/* Left Section: Image Thumbnails and Main Image */}
        <Col md={6}>
          <Row>
            <Col xs={3} className="d-flex flex-column">
            <Slideshow/>

            </Col>
            <Col xs={9}>
            </Col>
          </Row>
        </Col>

        {/* Right Section: Product Details */}
        <Col md={6}>
          <h2>আপনার বসে থাকার সময়গুলো হোক আরও আরামদায়ক ও উপভোগ্য,,
          রাজু স্টীল ফার্নিচার -২</h2>
          <p>এ বাজারের সবচেয়ে সেরা' মূল্যে প্রিমিয়াম কোয়ালিটির দারুন সব চেয়ার পাওয়া যাচ্ছে । 
            আমরা RS-21 V MASh চেয়ার টি 
            তৈরী করেছি, স্টীল পায়া,গ্যাসলিফট, ম্যাকানিজম  প্লাস্টিকের চাকা/হাতা/ব্যাগপার্ট,, 
            গর্জনের প্লাইবোর্ড,,
            ছলিট ফোম, উন্নত মানের কাপড়ও বিভিন্ন উপাদান দিয়ে,,
            যা অত্যন্ত টেকসই ও দেখতে খুবিই চমতকার,,
            
              🚛 ঢাকা সহ সারা বাংলাদেশেই এক টাকাও 
              অগ্রিম পেমেন্ট ছাড়াই হোম ডেলিভারি
              দেওয়া হয়, ইনশাআল্লাহ,,

            </p>
            <h3>অর্ডার করতে ইনবক্স করুন
            অথবা কল করুন <br/>
            📞01580697263, <br/>
              01916631682
            </h3>

            <p> <h1>চেয়ারটি বৈশিষ্ট্যগুলো নিম্নরূপ:</h1></p>

          <div className="d-flex align-items-center mb-2">
            <span className="me-2">4.1</span>
            <Badge bg="success">Amazon's Choice</Badge>
          </div>
          <p>1K+ bought in past month</p>

          {/* Price and Discount */}
          <div className="mb-3">
            <h3 className="text-danger">$4990.00 <small className="text-muted text-decoration-line-through">$5138.70</small></h3>
            <p className="text-muted">+ $5356.71 Shipping & Import Fees Deposit to Bangladesh</p>
          </div>

          {/* Capacity Options */}
          {/* <div className="mb-4">
            <h5>Capacity:</h5>
            <Button variant="outline-secondary" className="me-2 mb-2">8GB RAM | 128GB SSD</Button>
            <Button variant="outline-secondary" className="me-2 mb-2">16GB RAM | 512GB SSD</Button>
            <Button variant="outline-primary" className="me-2 mb-2">32GB RAM | 1TB SSD</Button>
            <Button variant="outline-secondary" className="me-2 mb-2">20GB RAM | 512GB SSD</Button>
          </div> */}

          {/* Quantity and Actions */}
          <Row className="align-items-center mb-3">
            <Col xs={3}>
              <select className="form-select">
                <option>Quantity: 1</option>
                <option>Quantity: 2</option>
                <option>Quantity: 3</option>
              </select>
            </Col>
            <Col>
              <Button variant="warning" className="w-100 mb-2" onClick={() => ssss("/OrderComponent")}>Add to Cart</Button>
              <Button variant="primary" className="w-100" onClick={() => ssss("/OrderComponent")}>Buy Now</Button>
            </Col>
          </Row>

          {/* Additional Product Info */}
          <div className="text-muted">
            <p><strong>ID:</strong> 85.04</p>
            <p><strong>Brand Name:</strong> Raju steel furniture</p>
            <p><strong>chare Size:</strong> 03.6 FT</p>
            <p><strong>Operating System:</strong> Windows 11 Home</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;