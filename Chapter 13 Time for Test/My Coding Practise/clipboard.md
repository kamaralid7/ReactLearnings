              { isLoading ? 
                    (
                      <button className="logout-btn px-2" onClick={ () => setIsLoading(!isLoading)}>Log Out</button>
                    ) : 
                    (
                      <button className="login-btn px-2" onClick={ () => setIsLoading(!isLoading)}>Log In</button>
                    )
              }