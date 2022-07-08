import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Progressbar from "./progressbar"
function Home2() {
  return (
    <div class="content">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 contents">
            <div class="row justify-content-center">
              <div class="col-md-12">
                <div class="form-block">
                  <div class="mb-4">
                    <div>
                      <Avatar
                        alt="logo"
                        src="https://png.pngtree.com/png-vector/20190602/ourmid/pngtree-lily-flower-logo-design-icon-vector-png-image_1295767.jpg"
                        style={{ width: "80px", height: "80px",border: "2px solid green", margin: 10 }}
                      />
                      <h1 style={{ marginRight: "30px"}}>
                        <strong>Eden</strong>
                      </h1>
                    
                    </div>
                    <span style={{ fontWeight: "bold",fontSize: "20px"}}>
                      Welcome! First Things first...
                    </span>
                  </div>
                  <form action="#" method="post">
                    <div class="form-group first">
                      <label for="username">Full Name</label>
                      <input type="text" class="form-control" id="username" />
                    </div>
                    <div class="form-group last mb-4">
                      <label for="password">Display Name</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                      />
                    </div>

                    <input
                      type="submit"
                      value="Create Workplace"
                      class="btn btn-pill text-white btn-block btn-primary"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
