/**

# root folder => login_app
# inside root folder, two folder => client (for frontend using react) & server (for backend using node)
# remove git repo from client folder and init in root folder => rm -rf .git and move .gitignore file to root folder
# rewrite the src folder
# now import tailwindcss in project
# import routes for the project
    # npm i react-router-dom
    # make routes file where all the routes will be written.
    # import and use the router variable to App.js and pass as props to routerProvider component.
    # make all the components needed and import in routes.

# use the formik (use to access the form data and validate) and react-hot-toast (show the message or alerts)

    # const formik = useFormik({
        initialValues: {
            fname: '',
            lname: ''
        },
        validate: function(){}
        validateOnBlur: false,
        validateOnChange: false,
    })
    <form onSubmit={formik.handleSubmit}>
        <input type="text" value={formik.values.fname} onChange={formik.handleChange}>
    </form>

    # make validation code format for the validating the register form.
    # use toaster for shwoing the form error 

# make profile section 

### setup the backend server:
    # npm init -y
    
    # npm install express (for creating http server) cors (sharing data b/w two different domains) mongoose mongodb-memory-server (to create mongodb in the memory) morgan (log every request inside the console) nodemon (to watch the server whenever any changes occur) dotenv (for reading the env variables) bcrpt(it helps in storing hash password instead of plain text) jsonwebtoken (for getting the token to authenticate the user )
    otp-generator (to generate the otp) mailgen (to generate the html email) nodemailer (to send the generated mail)

    # create file for create express(http) server=> server.js

    <!-- 
        app.listen(port, () => {
            console.log('server is running')
        })
     -->
    
    # now create a valid mongodb server, once valid connection is set up 
    then only backend server should start
    # for this we have to work on mongodb-memory-server for getting the 
    instance of mongodb server. 
    # get the mongodb instance url from mongo memory server
    # then using mongoose we can connect with the mongodb url(instance)

# create api routes:
    # for this we create new file (routes/index.js)
    # use Router from express. const router = Router();
    # create route from router like router.route('/register').post(controller function)
    # then make a controller file for the controllers of all the routes.(appController)

    export async function register(req, res){
        re.json('register route!');
    }

# correct file structure:

    ## model folder => here we write the database schema structure.
        # user model = mongoose.Schema


    # jwt token => it relase authorzied token so that user can use that token to authenticate
    user for this we have to use jsonwebtoken
    
    import {Jwt} from 'jsonwebtoken';
    Jwt.sign(payload, secret in base64, {expiresIn:'2h'})

    <!-- get user -->
    # we will make get user api 

    # make a auth middleware , it will use for check the logged in user
    # pass a authentication token and get it in => req.headers.authorization

    <!-- Generate otp -->
    # use otp-generator
    import optGenerator from 'otp-generator';
*/