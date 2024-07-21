import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1566837945700-30057527ade0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1603575448360-153f093fd0b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1562907550-096d3bf9b25c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1573497019414-e44d0759d00e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1549082984-1323b94df9a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
];

function randomImage(arr) {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  console.log(randomImage);
}

console.log(randomImage());
