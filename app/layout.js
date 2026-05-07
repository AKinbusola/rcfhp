 export const metadata = {
   title: 'RCF Campus',
   description: 'To Know Christ and Make Him Known',
 }

 import './globals.css'

 export default function RootLayout({ children }) {
   return (
     <html lang="en">
       <body>{children}</body>
     </html>
   )
 }
