# Idea Bridge

A platform connecting entrepreneurs with investors through AI-powered idea analysis and matching.

## Vision

Turn your idea into a business by connecting with the right investors. Share your idea, get AI-powered analysis, find matching investors, and collaborate to build something meaningful.

## Platform Architecture

```
                         IDEA BRIDGE
                              │
                    ┌─────────┴─────────┐
                    │                   │
                  Login              Register
                    │                   │
                    └─────────┬─────────┘
                              ↓
                         Choose Role
                         /          \
                        /            \
                  FOUNDER          INVESTOR
                     ↓                 ↓
              Founder Dashboard   Investor Dashboard
                     │                 │
             ┌───────┼───────┐    ┌────┼─────────┐
             ↓       ↓       ↓    ↓    ↓         ↓
          Post Idea My Ideas AI  Explore Match  Profile
                            │     Ideas
                            ↓
                       AI Analysis
                            │
                            ↓
                     Investor Matching
                            │
                            ↓
                         Messages
```

## Features

### For Founders
- **Post Idea**: Share your business idea with detailed information
- **My Ideas**: Manage and track all posted ideas
- **AI Analysis**: Get AI-powered insights and analysis of your idea
- **Investor Matching**: Discover investors interested in your space
- **Messaging**: Connect and communicate with potential investors

### For Investors
- **Explore Ideas**: Browse ideas across different categories and industries
- **Smart Matching**: Get matched with ideas that fit your investment criteria
- **Profile**: Showcase your expertise and investment preferences
- **Messages**: Communicate with founders directly

## Project Structure

```
IdeaBridge/
│
├── index.html                    # Landing page
│
├── pages/
│   ├── login.html               # User login
│   ├── register.html            # User registration
│   ├── role.html                # Role selection (Founder/Investor)
│   ├── founder-dashboard.html   # Founder dashboard
│   ├── investor-dashboard.html  # Investor dashboard
│   ├── post-idea.html           # Post new idea form
│   ├── explore-ideas.html       # Browse ideas
│   ├── idea-details.html        # View idea details
│   ├── ai-analysis.html         # AI analysis results
│   ├── matches.html             # Investment matches
│   ├── messages.html            # Messaging interface
│   └── profile.html             # User profile
│
├── css/
│   ├── style.css                # Global styles
│   ├── login.css                # Login/Register styles
│   ├── dashboard.css            # Dashboard styles
│   └── ideas.css                # Ideas page styles
│
├── js/
│   ├── main.js                  # Main application logic
│   ├── login.js                 # Authentication logic
│   ├── register.js              # Registration logic
│   ├── ideas.js                 # Ideas management
│   └── ai.js                    # AI analysis integration
│
├── images/
│   ├── logo.png                 # Brand logo
│   └── hero.png                 # Hero image
│
└── README.md                     # Project documentation
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/harinisrijayaprakash/idea-bridge.git
cd idea-bridge
```

2. Open `index.html` in your browser or use a local server:
```bash
python -m http.server 8000
# or
npx http-server
```

3. Navigate to `http://localhost:8000`

## Development Roadmap

- [ ] Frontend UI implementation
- [ ] Authentication system
- [ ] Founder dashboard
- [ ] Investor dashboard
- [ ] Idea posting and management
- [ ] AI analysis engine integration
- [ ] Investor matching algorithm
- [ ] Messaging system
- [ ] Backend API development
- [ ] Database setup
- [ ] Deployment

## Technology Stack

### Frontend (Phase 1)
- HTML5
- CSS3
- Vanilla JavaScript

### Planned Backend
- Node.js / Express
- MongoDB / PostgreSQL
- Python (for AI analysis)
- Socket.io (for real-time messaging)

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or issues, please open a GitHub issue or contact the maintainers.

---

**Let's turn ideas into businesses! 🚀**
