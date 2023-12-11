/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    images: {
        //First one is for the (https://cdn-icons-png.flaticon.com/512/3135/3135715.png)
        //Second on is for the (lh3.googleusercontent.com/**)
        //This is an old systax like next12 or so but work
        domains: ['cdn-icons-png.flaticon.com','lh3.googleusercontent.com']
      }
}


module.exports = nextConfig

