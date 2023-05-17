
## References:
- https://beta.reactjs.org/apis/react/createElement
- https://www.youtube.com/watch?v=IrHmpdORLu8

Step 1 create useState([]) variable and copy
Step 2 map useState variables
Step 3 css to restaurant cards
step 4 Search filter in UI
step 5 filter function to filter useState
step 6 footer ui

                <li>
                  { isLoggedin ? (
                  <button className="logout-btn"
                    onClick={() => setIsLoggedin(false)}
                  >

                  </button>
                ) : (
                  <button className="login-btn">
                    onClick={() =>{ navigate("/login")}}
                  </button>

                )}</li>