export default function Footer() {
    return (
      <footer style={{
        textAlign: "center",
        padding: "30px 0",
        marginTop: "50px",
        borderTop: "1px solid #333",
        color: "#bbb"
      }}>
        © {new Date().getFullYear()} Arun Lavudya • All Rights Reserved
      </footer>
    );
  }
  