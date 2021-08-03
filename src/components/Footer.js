import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>MonAgence</span>. Built by{" "}
        <a href="https://www.gatsbyjs.com/">AgenceN</a>
      </p>
    </footer>
  )
}

export default Footer
