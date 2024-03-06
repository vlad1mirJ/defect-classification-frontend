function Footer() {
  const date = new Date()
  return (
    <footer
      className="footer footer-center p-4 bg-base-300 text-base-content"
      id="footer"
    >
      <aside>
        <p>
          © {date.getFullYear()} - made by UWE student Vladimiras Jankauskas
        </p>
      </aside>
    </footer>
  )
}

export default Footer
