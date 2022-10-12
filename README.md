# Team Profile Generator

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)

## Description

This is a light-weight command-line team profile page generator. It used inquirer to prompt simple questions and output a styled html page for team profile.

## Installation

> 1. Open your terminal and `cd` to the desired directory
> 2. Use `git clone https://github.com/hmhtom/team-profile-generator.git` to clone the repository under your directory
> 3. Make sure `node` is installed on your computer
> 4. Run `npm install` to install the dependencies
> 5. Run `npm start` to start

## Usage

> 1. Follow the prompt instruction on your command line to input information about your team manager including name, id, officeNumber and email.
> 2. In the menu you can choose `Add Enginer`, `Add Intern` or `Exit`
> 3. `Add Engineer` will ask you for your engineer's name, id, email and github username
> 4. `Add Intern` will ask you for your intern's name, id, email and school.
> 5. After adding engeering or intern for your team, application will go back to menu, and you can add as many engineers and interns as you want.
> 6. Once finishing adding all team members, choose `Exit` to exit the application and create your team profile html page.
> 7. Output file path will be saved under `dist/sample.html`

[Here is the link to a sample Team Profile Page](./dist/sample.html)

[Here is a walkthrough video to the application](https://drive.google.com/file/d/1v5UAJOXFBF0jeI_ZURQL6ynuT7vTg69A/view)

## Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT License ![MIT](https://img.shields.io/github/license/hmhtom/team-profile-generator?style=plastic)

Copyright (c) 2022 hmhtom

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
