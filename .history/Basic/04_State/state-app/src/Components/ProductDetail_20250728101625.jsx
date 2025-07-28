// rafce : React Arrow Function Component Export

import React from 'react'

const ProductDetail = () => {

// 객체 추가
const product = {
    id : "p0001",
    name : "야자수",
    price : 52000,
    quantity : 1,
    img : "http://i.imgur.com/abc123.jpg",
}



// state 선언
const [quantity, setQuantity] = userState(product.quantity);

// 최종 가격 계산
const total = product.price * quantity;

// +.




  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail