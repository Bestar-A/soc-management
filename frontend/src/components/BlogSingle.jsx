import React from 'react'
import WaveEffect from './WaveEffect'

const BlogSingle = () => {
  return (
    <>
    <WaveEffect title={"New Blog"} content={'December 13, 2019 By Admin'} />
    <section className="site-section mb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8 blog-content">

            <p className="lead mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nihil aspernatur nemo sunt, qui, harum repudiandae quisquam eaque dolore itaque quod tenetur quo quos labore?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita cumque necessitatibus ducimus debitis totam, quasi praesentium eveniet tempore possimus illo esse, facilis? Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur voluptatibus incidunt reprehenderit, quidem repellat sapiente, id, earum obcaecati.</p>

            <div className="row mb-5">
              <div className="col-md-6">
                <figure><img src="assets/img/img_1.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid"/>
                  <figcaption>This is an image caption</figcaption>
                </figure>
              </div>
              <div className="col-md-6">
                <figure><img src="assets/img/img_2.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid"/>
                  <figcaption>This is an image caption</figcaption>
                </figure>
              </div>
            </div>

            <blockquote>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident vero tempora aliquam excepturi labore, ad soluta voluptate necessitatibus. Nulla error beatae, quam, facilis suscipit quaerat aperiam minima eveniet quis placeat.</p>
            </blockquote>

            <p>Eveniet deleniti accusantium nulla natus nobis nam asperiores ipsa minima laudantium vero cumque cupiditate ipsum ratione dicta, expedita quae, officiis provident harum nisi! Esse eligendi ab molestias, quod nostrum hic saepe repudiandae non. Suscipit reiciendis tempora ut, saepe temporibus nemo.</p>
            <p>Accusamus, temporibus, ullam. Voluptate consectetur laborum totam sunt culpa repellat, dolore voluptas. Quaerat cum ducimus aut distinctio sit, facilis corporis ab vel alias, voluptas aliquam, expedita molestias quisquam sequi eligendi nobis ea error omnis consequatur iste deleniti illum, dolorum odit.</p>
            <p>In adipisci corporis at delectus! Cupiditate, voluptas, in architecto odit id error reprehenderit quam quibusdam excepturi distinctio dicta laborum deserunt qui labore dignissimos necessitatibus reiciendis tenetur corporis quas explicabo exercitationem suscipit. Nisi quo nulla, nihil harum obcaecati vel atque quos.</p>
            <p>Amet sint explicabo maxime accusantium qui dicta enim quia, nostrum id libero voluptates quae suscipit dolor quam tenetur dolores inventore illo laborum, corporis non ex, debitis quidem obcaecati! Praesentium maiores illo atque error! Earum, et, fugit. Sint, delectus molestiae. Totam.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iste, repudiandae facere aperiam sapiente, officia delectus soluta molestiae nihil corporis animi quos ratione qui labore? Sint eaque perspiciatis minus illum.</p>
            <p>Consectetur porro odio quod iure quaerat cupiditate similique, dolor reprehenderit molestias provident, esse dolorum omnis architecto magni amet corrupti neque ratione sunt beatae perspiciatis? Iste pariatur omnis sed ut itaque.</p>
            <p>Id similique, rem ipsam accusantium iusto dolores sit velit ex quas ea atque, molestiae. Sint, sed. Quisquam, suscipit! Quisquam quibusdam maiores fugiat eligendi eius consequuntur, molestiae saepe commodi expedita nemo!</p>
            <div className="pt-5">
              <p>Categories: <a href="#">Design</a>, <a href="#">Events</a> Tags: <a href="#">#html</a>, <a href="#">#trends</a></p>
            </div>

            <div className="pt-5">
              <h3 className="mb-5">6 Comments</h3>
              <ul className="comment-list">
                <li className="comment">
                  <div className="vcard bio">
                    <img src="assets/img/person_1.jpg" alt="Free Website Template by Free-Template.co"/>
                  </div>
                  <div className="comment-body">
                    <h3>Jean Doe</h3>
                    <div className="meta">January 9, 2018 at 2:21pm</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <p><a href="#" className="reply">Reply</a></p>
                  </div>
                </li>

                <li className="comment">
                  <div className="vcard bio">
                    <img src="assets/img/person_1.jpg" alt="Image placeholder"/>
                  </div>
                  <div className="comment-body">
                    <h3>Jean Doe</h3>
                    <div className="meta">January 9, 2018 at 2:21pm</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <p><a href="#" className="reply">Reply</a></p>
                  </div>

                  <ul className="children">
                    <li className="comment">
                      <div className="vcard bio">
                        <img src="assets/img/person_1.jpg" alt="Image placeholder"/>
                      </div>
                      <div className="comment-body">
                        <h3>Jean Doe</h3>
                        <div className="meta">January 9, 2018 at 2:21pm</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                        <p><a href="#" className="reply">Reply</a></p>
                      </div>

                      <ul className="children">
                        <li className="comment">
                          <div className="vcard bio">
                            <img src="assets/img/person_1.jpg" alt="Image placeholder"/>
                          </div>
                          <div className="comment-body">
                            <h3>Jean Doe</h3>
                            <div className="meta">January 9, 2018 at 2:21pm</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                            <p><a href="#" className="reply">Reply</a></p>
                          </div>

                          <ul className="children">
                            <li className="comment">
                              <div className="vcard bio">
                                <img src="assets/img/person_1.jpg" alt="Image placeholder"/>
                              </div>
                              <div className="comment-body">
                                <h3>Jean Doe</h3>
                                <div className="meta">January 9, 2018 at 2:21pm</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                <p><a href="#" className="reply">Reply</a></p>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="comment">
                  <div className="vcard bio">
                    <img src="assets/img/person_1.jpg" alt="Image placeholder"/>
                  </div>
                  <div className="comment-body">
                    <h3>Jean Doe</h3>
                    <div className="meta">January 9, 2018 at 2:21pm</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <p><a href="#" className="reply">Reply</a></p>
                  </div>
                </li>
              </ul>

              <div className="comment-form-wrap pt-5">
                <h3 className="mb-5">Leave a comment</h3>
                <form action="#" className="">
                  <div className="form-group">
                    <label for="name">Name *</label>
                    <input type="text" className="form-control" id="name"/>
                  </div>
                  <div className="form-group mt-3">
                    <label for="email">Email *</label>
                    <input type="email" className="form-control" id="email"/>
                  </div>
                  <div className="form-group mt-3">
                    <label for="website">Website</label>
                    <input type="url" className="form-control" id="website"/>
                  </div>

                  <div className="form-group mt-3">
                    <label for="message">Message</label>
                    <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                  </div>
                  <div className="form-group mt-3">
                    <input type="submit" value="Post Comment" className="btn btn-primary"/>
                  </div>

                </form>
              </div>
            </div>

          </div>
          <div className="col-md-4 sidebar">
            <div className="sidebar-box">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon fa fa-search"></span>
                  <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                </div>
              </form>
            </div>
            <div className="sidebar-box">
              <div className="categories">
                <h3>Categories</h3>
                <li><a href="#">Dog <span>(12)</span></a></li>
                <li><a href="#">Dog Food <span>(22)</span></a></li>
                <li><a href="#">Vetenirarian <span>(37)</span></a></li>
                <li><a href="#">Events<span>(42)</span></a></li>
              </div>
            </div>
            <div className="sidebar-box">
              <img src="assets/img/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4"/>
              <h3>About The Author</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
              <p><a href="#" className="btn btn-primary btn-sm">Read More</a></p>
            </div>

            <div className="sidebar-box">
              <h3>Paragraph</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default BlogSingle