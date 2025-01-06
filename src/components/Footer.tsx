export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Blog</li>
              <li>Documentation</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Twitter</li>
              <li>GitHub</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div> */}
        <div className=" text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
