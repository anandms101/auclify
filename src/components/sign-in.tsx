
import { signIn } from "@/app/api/auth/[...nextauth]/auth"
import { Button } from "./ui/button"

export function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
        >
            <Button type="submit">SignIn</Button>
        </form>
    )
} 