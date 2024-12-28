import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetAdminQuery,
  useUpdateAdminMutation,
} from "../../store/slices/usersApiSlice";
import { useImageUploadMutation } from "../../store/slices/articleSlice";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const ProfileScreen = () => {
  const [adminName, setAdminName] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [instrument, setInstrument] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState(false);
  const [pic, setPic] = useState("");
  const [img, setImg] = useState(false);

  const { data: adminProfile, refetch, isLoading } = useGetAdminQuery();
  const [imageUpload] = useImageUploadMutation();
  const [updateAdmin] = useUpdateAdminMutation();

  console.log(status)
  useEffect(() => {
    if (!isLoading) {
      setAdminName(adminProfile[0].adminName);
      setEmail(adminProfile[0].email);
      setAbout(adminProfile[0].about);
      setInstrument(adminProfile[0].instrument);
      setFacebook(adminProfile[0].facebook);
      setInstagram(adminProfile[0].instagram);
      setLinkedin(adminProfile[0].linkedin);
      setPhone(adminProfile[0].phone);
      setPic(adminProfile[0].pic);
    }
    setStatus(false);
  }, [adminProfile, isLoading, status]);

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setFile(img);
    setImg(true);
  };

  const adminUpdateHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file.data);

    // if (
    //   !adminName ||
    //   !email ||
    //   !about ||
    //   !address ||
    //   !birthDate ||
    //   !job ||
    //   !phone
    // ) {
    //   toast.error("Invalid Fields");
    //   return;
    // }
    try {
      
      if(img){
        const response = await imageUpload(formData).unwrap()
        await updateAdmin({
          adminName,
          email,
          about,
          instrument,
          phone,
          facebook,
          instagram,
          linkedin,
          pic: response.image,
        }).unwrap();
        refetch();
        toast.success("Updated successfully");
        setStatus(true);
      }else{
        await updateAdmin({
          adminName,
          email,
          about,
          instrument,
          phone,
          facebook,
          instagram,
          linkedin,
          pic,
        }).unwrap();
        refetch();
        toast.success("Updated successfully");
        setStatus(true);
      }

      
      
    } catch (error) {
      toast.error(error.err);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main id="admin-main" className="admin-main">
          <div className="pagetitle">
            <h1>Profile</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/admindashboard">Home</Link>
                </li>
                <li className="breadcrumb-item">Users</li>
                <li className="breadcrumb-item active">Profile</li>
              </ol>
            </nav>
          </div>
          <section className="section profile">
            <div className="row">
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                    <img src={!img ? pic : file.preview} alt="Profile" className="rounded-circle" />
                    <h2>{adminName}</h2>
                    <h3>{instrument}</h3>
                    <div className="social-links mt-2">
                      <Link
                        to={facebook}
                        className="facebook"
                      >
                        <i className="bi bi-facebook"></i>
                      </Link>
                      <Link
                        to={instagram}
                        className="instagram"
                      >
                        <i className="bi bi-instagram"></i>
                      </Link>
                      <Link
                        to={linkedin}
                        className="linkedin"
                      >
                        <i className="bi bi-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-8">
                <div className="card">
                  <div className="card-body pt-3">
                    <ul className="nav nav-tabs nav-tabs-bordered">
                      <li className="nav-item">
                        <button
                          className="nav-link active"
                          data-bs-toggle="tab"
                          data-bs-target="#profile-overview"
                        >
                          Overview
                        </button>
                      </li>

                      <li className="nav-item">
                        <button
                          className="nav-link"
                          data-bs-toggle="tab"
                          data-bs-target="#profile-edit"
                        >
                          Edit Profile
                        </button>
                      </li>

                      <li className="nav-item">
                        <button
                          className="nav-link"
                          data-bs-toggle="tab"
                          data-bs-target="#profile-change-password"
                        >
                          Change Password
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content pt-2">
                      <div
                        className="tab-pane fade show active profile-overview"
                        id="profile-overview"
                      >
                        <h5 className="card-title">About</h5>
                        <p className="small fst-italic">{about}</p>

                        <h5 className="card-title">Profile Details</h5>

                        <div className="row">
                          <div className="col-lg-3 col-md-4 label ">Name</div>
                          <div className="col-lg-9 col-md-8">{adminName}</div>
                        </div>

                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Instrument</div>
                          <div className="col-lg-9 col-md-8">{instrument}</div>
                        </div>

                        {/* <div className="row">
                          <div className="col-lg-3 col-md-4 label">
                            Birthday
                          </div>
                          <div className="col-lg-9 col-md-8">{birthDate}</div>
                        </div>

                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Address</div>
                          <div className="col-lg-9 col-md-8">{address}</div>
                        </div> */}

                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Phone</div>
                          <div className="col-lg-9 col-md-8">{phone}</div>
                        </div>

                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Email</div>
                          <div className="col-lg-9 col-md-8">{email}</div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade profile-edit pt-3"
                        id="profile-edit"
                      >
                        <div className="row mb-3">
                          <label className="col-md-4 col-lg-3 col-form-label">
                            Profile Image
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <img
                              src={!img ? pic : file.preview}
                              alt="Profile"
                            />
                            <div className="pt-2 mx-5">
                              <button
                                className="btn btn-primary btn-sm"
                                title="Upload new profile image"
                                onClick={() =>
                                  document
                                    .getElementById("imageFileSelect")
                                    .click()
                                }
                              >
                                <i className="bi bi-upload"></i>
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                title="Remove my profile image"
                                onClick={(e) =>
                                  setImg(false)
                                }
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                              <input
                                id="imageFileSelect"
                                className="form-class hidden"
                                type="file"
                                onChange={handleFileChange}
                                hidden
                              />
                            </div>
                          </div>
                        </div>
                        <form>
                          <div className="row mb-3">
                            <label className="col-md-4 col-lg-3 col-form-label">
                              Name
                            </label>
                            <div className="col-md-8 col-lg-9">
                              <input
                                name="fullName"
                                type="text"
                                className="form-control"
                                value={adminName}
                                onChange={(e) => setAdminName(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label className="col-md-4 col-lg-3 col-form-label">
                              About
                            </label>
                            <div className="col-md-8 col-lg-9">
                              <textarea
                                name="about"
                                className="form-control"
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                                style={{ height: "100px" }}
                              ></textarea>
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label className="col-md-4 col-lg-3 col-form-label">
                              Instrument
                            </label>
                            <div className="col-md-8 col-lg-9">
                              <input
                                name="job"
                                type="text"
                                className="form-control"
                                value={instrument}
                                onChange={(e) => setInstrument(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label className="col-md-4 col-lg-3 col-form-label">
                              Phone
                            </label>
                            <div className="col-md-8 col-lg-9">
                              <input
                                name="phone"
                                type="text"
                                className="form-control"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label className="col-md-4 col-lg-3 col-form-label">
                              Email
                            </label>
                            <div className="col-md-8 col-lg-9">
                              <input
                                name="email"
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-md-4 col-lg-3 col-form-label">
                              Facebook
                            </label>
                            <div className="col-md-8 col-lg-9">
                              <input
                                name="country"
                                type="text"
                                className="form-control"
                                value={facebook}
                                onChange={(e) => setFacebook(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label className="col-md-4 col-lg-3 col-form-label">
                              Instagram
                            </label>
                            <div className="col-md-8 col-lg-9">
                              <input
                                name="address"
                                type="text"
                                className="form-control"
                                value={instagram}
                                onChange={(e) => setInstagram(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <label className="col-md-4 col-lg-3 col-form-label">
                              Linkedin
                            </label>
                            <div className="col-md-8 col-lg-9">
                              <input
                                name="address"
                                type="text"
                                className="form-control"
                                value={linkedin}
                                onChange={(e) => setLinkedin(e.target.value)}
                              />
                            </div>
                          </div>

                          

                          

                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={adminUpdateHandler}
                            >
                              Save Changes
                            </button>
                          </div>
                        </form>
                      </div>

                      <div
                        className="tab-pane fade pt-3"
                        id="profile-change-password"
                      >
                        <form>
                          <div className="row mb-3">
                            <label className="col-md-4 col-lg-3 col-form-label">
                              Current Password
                            </label>
                            <div className="col-md-8 col-lg-9">
                              <input
                                name="password"
                                type="password"
                                className="form-control"
                                id="currentPassword"
                              />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label className="col-md-4 col-lg-3 col-form-label">
                              New Password
                            </label>
                            <div className="col-md-8 col-lg-9">
                              <input
                                name="newpassword"
                                type="password"
                                className="form-control"
                                id="newPassword"
                              />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label className="col-md-4 col-lg-3 col-form-label">
                              Re-enter New Password
                            </label>
                            <div className="col-md-8 col-lg-9">
                              <input
                                name="renewpassword"
                                type="password"
                                className="form-control"
                                id="renewPassword"
                              />
                            </div>
                          </div>

                          <div className="text-center">
                            <button type="submit" className="btn btn-primary">
                              Change Password
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default ProfileScreen;
