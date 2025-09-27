function Team() {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Meet Our Team</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100 text-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D35AQFr57K3UJR4jA/profile-framedphoto-shrink_800_800/B4DZfzY7tRHAAg-/0/1752135089319?e=1759593600&v=beta&t=WiRBmDR0HkF5NGGthyd-vDmnd23AD3OgdIs_GiXN2d0"
              className="card-img-top rounded-circle mx-auto mt-3"
              alt="Admin"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Ivan Gustav</h5>
              <p className="card-text">Founder & CEO (Atmint)</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQHTBQwUKJrCLg/profile-displayphoto-crop_800_800/B4EZeqo0yDHgAM-/0/1750914519788?e=1761782400&v=beta&t=OCPz3p9z4cr5EAfqIRMnbypYTyRMu_oloR95nr6EbxU"
              className="card-img-top rounded-circle mx-auto mt-3"
              alt="Lead Developer"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Kri</h5>
              <p className="card-text">Head Programmer</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQHIgwPOkwGRYQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690466157714?e=1761782400&v=beta&t=EkcukeOxgh_zI0Pe2K1ZZZrK7DoeUoCD8ogA9uChIlw"
              className="card-img-top rounded-circle mx-auto mt-3"
              alt="Member"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Golden General</h5>
              <p className="card-text">Marketing Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
