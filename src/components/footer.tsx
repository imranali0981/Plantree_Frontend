import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Github, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-50 dark:bg-green-900/20 border-t border-green-100 dark:border-green-900/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-green-600 dark:text-green-400">Plantree</h3>
            <p className="text-sm text-muted-foreground">
              Harnessing AI for sustainable tree plantation and environmental impact prediction.
            </p>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
              >
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-green-600 dark:text-green-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/problem"
                  className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                >
                  Problem
                </Link>
              </li>
              <li>
                <Link
                  to="/solution"
                  className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                >
                  Solution
                </Link>
              </li>
              <li>
                <Link
                  to="/objectives"
                  className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                >
                  Objectives
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-green-600 dark:text-green-400">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/sdgs"
                  className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                >
                  SDGs
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-green-600 dark:text-green-400">Contact Us</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>123 Green Street</p>
              <p>Eco City, EC 12345</p>
              <p>Email: info@plantree.io</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-100 dark:border-green-900/30 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} Plantree. Made with{" "}
            <Heart size={14} className="text-red-500 fill-red-500" /> for a greener planet.
          </p>
        </div>
      </div>
    </footer>
  )
}
