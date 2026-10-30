import { Button } from "@/components/ui/Button";
import { T } from "@/components/ui/T";

export default function NotFound() {
  return (
    <main id="main" className="wrap nf">
      <h1>404</h1>
      <p className="lead" style={{ margin: "0 auto" }}>
        <T en="This page doesn't exist (any more)." th="ไม่พบหน้านี้ (หรือถูกย้ายไปแล้ว)" />
      </p>
      <div className="more">
        <Button href="/" variant="p">
          <T en="Back to home" th="กลับหน้าแรก" />
        </Button>
      </div>
    </main>
  );
}
