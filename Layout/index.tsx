import Navbar from './Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-lato w-full">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
