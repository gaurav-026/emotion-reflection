
## How to setup the project locally

Clone the github repository url : 

```bash
git clone https://github.com/gaurav-026/emotion-reflection.git 

```
Open in VS Code

### Setting up Server (For Windows)

1. Navigate to server directory in terminal using command: 

```bash
cd server 

```
2. Create a Virtual environment using command
```bash
python -m venv venv 

```
3. Activate the environment
```bash
venv/Scripts/activate.bat

```
4. Install flask
```bash
pip install flask
```
5. Run server.py file
```bash
python server.py
```

Now you can see your server working on http://localhost:5000 or http://127.0.0.1:5000 


### Setting up Client 


1. Navigate to client directory in terminal using command: 

```bash
cd client

```
2. Install all the dependencies 
```bash
npm install

```
3. Run the development server
```bash
npm run dev

```

Now you can see your server working on http://localhost:3000