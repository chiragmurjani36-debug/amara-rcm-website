import './globals.css'

export const metadata = {
  title: 'Amara RCM Services – Your Dedicated Billing Partner',
  description: 'Clean claims, faster reimbursements, and transparent weekly reporting. HIPAA-compliant RCM for practices across the U.S.',
  icons: { icon: '/favicon.svg' }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}