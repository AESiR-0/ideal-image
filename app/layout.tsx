import localFont from "next/font/local";
import "./globals.css";
import logo from "@/public/static/symbol/32_32.png";
import Script from "next/script";

const Halenoir = localFont({
  src: [
    {
      path: "./fonts/Halenoir-Light.woff2",
      weight: "300",
    },
    {
      path: "./fonts/Halenoir-Medium.woff2",
      weight: "400",
    },
    {
      path: "./fonts/Halenoir-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-halenoir",
});

const Begum = localFont({
  src: [
    { path: "./fonts/Begum-Regular.woff2", weight: "400" },
    { path: "./fonts/Begum-Bold.woff2", weight: "700" },
  ],
  variable: "--font-begum",
});

export const metadata = {
  title: "Ideal Image",
  description: "Best in the USA",
  ogImage: logo,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {" "}
        {/* ReB2B Script */}
        <Script id="reb2b-script" strategy="afterInteractive">
          {`!function () {
          var reb2b = window.reb2b = window.reb2b || [];
          if (reb2b.invoked) return;
          reb2b.invoked = true;
          reb2b.methods = ["identify", "collect"];
          reb2b.factory = function (method) {
            return function () {
              var args = Array.prototype.slice.call(arguments);
              args.unshift(method);
              reb2b.push(args);
              return reb2b;
            };
          };
          for (var i = 0; i < reb2b.methods.length; i++) {
            var key = reb2b.methods[i];
            reb2b[key] = reb2b.factory(key);
          }
          reb2b.load = function (key) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";
            var first = document.getElementsByTagName("script")[0];
            first.parentNode.insertBefore(script, first);
          };
          reb2b.SNIPPET_VERSION = "1.0.1";
          reb2b.load("VN080H4YME6J");
        }();`}
        </Script>
        {/* Event Snippet for Submit Lead Form */}
        <Script id="gtag-conversion-snippet-1" strategy="afterInteractive">
          {`gtag('event', 'conversion', {
          'send_to': 'AW-16711899664/oaL1CNaSpNUZEJC07aA-',
          'value': 1.0,
          'currency': 'USD'
        });`}
        </Script>
        {/* Event Snippet for gtag_report_conversion */}
        <Script id="gtag-conversion-snippet-2" strategy="afterInteractive">
          {`function gtag_report_conversion(url) {
          var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          gtag('event', 'conversion', {
            'send_to': 'AW-16711899664/oaL1CNaSpNUZEJC07aA-',
            'value': 1.0,
            'currency': 'USD',
            'event_callback': callback
          });
          return false;
        }`}
        </Script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L68SB695HB"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L68SB695HB');
            `,
          }}
        ></script>
        {/* RB2B Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function () {
                var reb2b = window.reb2b = window.reb2b || [];
                if (reb2b.invoked) return;
                reb2b.invoked = true;
                reb2b.methods = ["identify", "collect"];
                reb2b.factory = function (method) {
                  return function () {
                    var args = Array.prototype.slice.call(arguments);
                    args.unshift(method);
                    reb2b.push(args);
                    return reb2b;
                  };
                };
                for (var i = 0; i < reb2b.methods.length; i++) {
                  var key = reb2b.methods[i];
                  reb2b[key] = reb2b.factory(key);
                }
                reb2b.load = function (key) {
                  var script = document.createElement("script");
                  script.type = "text/javascript";
                  script.async = true;
                  script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";
                  var first = document.getElementsByTagName("script")[0];
                  first.parentNode.insertBefore(script, first);
                };
                reb2b.SNIPPET_VERSION = "1.0.1";
                reb2b.load("VN080H4YME6J");
              }();
            `,
          }}
        ></script>
      </head>
      <body
        className={`${Halenoir.variable} font-Halenoir ${Begum.variable} overflow-x-hidden w-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
