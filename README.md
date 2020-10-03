# segmed

An image gallery application that allows you tag image and remembers tagged images across sessions.

## Setup
> - Pull project in: `git clone https://github.com/ascii-dev/segmed.git`
> - cd into the directory: `cd segmed`
> - Create virtual environment: `python -m venv ./.venv`
> - Activate virtual environment: `source ./.venv/bin/activate`
> - Create `.env` file in project root with `.env.sample` as a template
> - Install backend requirements: `pip install -r requirements.txt`
> - Run migrations: `./manage.py migrate`
> - Pull Unsplash Images: `./manage.py load_images_from_unsplash`
> - Start server: `./manage.py runserver`
> - In a new terminal, cd to frontend directory
> - Setup yarn requirements: `yarn install`
> - Start frontend: `yarn start`
