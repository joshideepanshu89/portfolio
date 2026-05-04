export default function Projects() {
  return (
    <section className="py-12 bg-(--background-light)">
      <h2 className="text-(--primary) text-center text-xl font-semibold">
        PROJECTS
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:max-w-350 md:max-w-200 mx-auto p-5 ">
        <div>
          <img
            src="/images/projects/invoician.png"
            alt="Project 1"
          />
          <div>
            <div>invoician.com</div>
            <div>Full-featured invoicing platform for GST and business workflows.</div>
            <ul>
              <li>Invoice lifecycle (sales, purchase, returns)</li>
              <li>Auth & financial tracking system</li>
              <li>Deployed on VPS (Ubuntu, Nginx, PM2)</li>
            </ul>
            <div>
              <div>React</div>
              <div>Node.js</div>
              <div>MongoDB</div>
              <div>Express</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
