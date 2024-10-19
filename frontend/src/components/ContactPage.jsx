import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

function ContactMethod({ icon, title }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-2 p-2 bg-primary/10 rounded-full">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Contact Us</CardTitle>
          <CardDescription>
            We'd love to hear from you. Here's how you can reach us...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <p className="text-muted-foreground">
              You can reach or contact the creator of this app through Email, Linkedin or can visit github account.
              Feel free to share your experince on this web app and please suggest if any improvements needed.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a target="_blank" href={"https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLdVzvrjVplLcbFRfLxbPSSdCWZkqNZKLrSvSggsjgRvpMgPrHXnTffnWvvfPnhQNxbPsx"}>
                <ContactMethod
                  icon={<Mail className="h-6 w-6" />}
                  title="Email"
                />
              </a>

              <a target="_blank" href={"https://github.com/akshay56665/"}>
                <ContactMethod
                  icon={<Github className="h-6 w-6" />}
                  title="Gtihub"
                />
              </a>

              <a target="_blank" href={"https://linkedin.com/in/akshay-thakur-09b05b224"}>
                <ContactMethod
                  icon={<Linkedin className="h-6 w-6" />}
                  title="LinkedIn"
                />
              </a>
            </div>

            <div className="mt-8">
              <h3 className="text-lg text-center font-semibold mb-4">Creator of this app</h3>
              <div className="flex flex-col flex-wrap text-center justify-center">
                <p>Akshay Thakur</p>
                <p>Upcoming Software Engineer</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}