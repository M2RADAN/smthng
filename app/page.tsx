"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle,
  Wallet,
  CreditCard,
  Search,
  DollarSign,
  MessageSquare,
  Twitter,
} from "lucide-react";
import { ClientButton } from "@/components/client-button";
import { useRef } from "react";

export default function Home() {
  const refContentBuy = useRef<HTMLElement>(null);
  const refContentTokenomic = useRef<HTMLElement>(null);
  const refContentAbout = useRef<HTMLElement>(null);
  const refContentContact = useRef<HTMLElement>(null);
  const refContentHome = useRef<HTMLElement>(null);
  const refContentRoadMap = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 bg-[#1A1A1A]/80 backdrop-blur-sm fixed w-full z-50 border-b border-[#46eac8]/10">
        <Image
          src="/logo.svg"
          alt="Jade Logo"
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <div className="hidden md:flex items-center gap-6 text-[#46eac8]">
          <a
            style={{ cursor: "pointer" }}
            onClick={() =>
              refContentHome.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            style={{ cursor: "pointer" }}
            onClick={() =>
              refContentAbout.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            style={{ cursor: "pointer" }}
            onClick={() =>
              refContentRoadMap.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition-colors"
          >
            Roadmap
          </a>
          <a
            style={{ cursor: "pointer" }}
            onClick={() =>
              refContentContact.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={refContentHome}
        className="relative min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] to-transparent" />
          <div className="absolute inset-0 bg-[url('/logo.svg')] bg-cover bg-center opacity-10" />
        </div>
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative">
          <div className="text-white space-y-6">
            <p className="text-[#46eac8]">
              — Embrace the Power of BlockDAG Technology
            </p>
            <h1 className="text-5xl md:text-7xl font-bold">
              $JADE Future
              <br />
              <span className="text-[#46eac8]">OF Kaspa</span>
            </h1>
            <p className="text-gray-400">
              join our community right now! The first serpent dragon on krc20
              <br />
              TICKER: JADE
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-[#46eac8] text-[#46eac8] hover:bg-[#46eac8]/10"
              >
                Whitepaper
              </Button>
              <Button
                className="bg-[#46eac8] hover:bg-[#46eac8]/80 text-[#1A1A1A] font-bold"
                onClick={() =>
                  refContentBuy.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Buy Token
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[400px] h-[400px] animate-pulse">
              <Image
                src="/logo.svg"
                alt="Jade Dragon"
                width={400}
                height={400}
                className="w-full max-w-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#46eac8]/20 to-transparent rounded-full animate-spin-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="bg-[#1A1A1A] py-12 px-4 border-y border-[#46eac8]/10">
        <div className="container mx-auto">
          <div className="bg-[#2A2A2A] rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-[#46eac8] mb-4">Donate</h2>
            <p className="text-white text-lg">
              We are not collecting donations. If you want to support us, you
              can simply buy our token using the KSPR bot.
            </p>
            <ClientButton
              className="mt-6 bg-[#46eac8] hover:bg-[#46eac8]/80 text-[#1A1A1A] font-bold"
              onClick={() =>
                refContentBuy.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Buy JADE Token
            </ClientButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={refContentAbout} id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#46eac8]/20 to-transparent rounded-full animate-spin-slow" />
                <Image
                  src="/logo.svg"
                  alt="Jade Dragon Symbol"
                  width={400}
                  height={400}
                  className="w-full max-w-[400px] relative z-10"
                />
              </div>
            </div>
            <div className="text-white space-y-6">
              <h2 className="text-3xl font-bold text-[#46eac8]">
                About Our Jade token
              </h2>
              <h3 className="text-4xl font-bold">Jade is Changing the Game!</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#46eac8] rounded-full" />
                  Jade is an nephritis dragon, that symbolize wealth and
                  determination.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#46eac8] rounded-full" />
                  We&apos;re sure, that right mascot and naming are one of key
                  to success.
                </li>
              </ul>
              <Button
                variant="outline"
                className="border-[#46eac8] text-[#46eac8] hover:bg-[#46eac8]/10"
                onClick={() =>
                  refContentTokenomic.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Tokenomics Section */}
      <section ref={refContentTokenomic} className="py-20 px-4 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#46eac8] mb-2">
              Token Distribution
            </h2>
            <h3 className="text-4xl font-bold text-white">Tokenomics</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-[#2A2A2A] border-[#46eac8]/20">
                <CardContent className="p-6">
                  <h4 className="text-[#46eac8] text-xl font-bold mb-4">
                    Total Supply
                  </h4>
                  <p className="text-white text-3xl font-bold">1,000,000,000</p>
                </CardContent>
              </Card>
              <div className="grid gap-4">
                <Card className="bg-[#2A2A2A] border-[#46eac8]/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[#46eac8] font-bold">
                        Token Supply Sale
                      </h4>
                      <p className="text-white font-bold">80%</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-[#2A2A2A] border-[#46eac8]/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[#46eac8] font-bold">
                        CEX Liquidity
                      </h4>
                      <p className="text-white font-bold">20%</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4">
                <Card className="bg-[#2A2A2A] border-[#46eac8]/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[#46eac8] font-bold">1 $KAS</h4>
                      <p className="text-white font-bold">2000 $JADE</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-[#2A2A2A] border-[#46eac8]/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[#46eac8] font-bold">1 $WADU</h4>
                      <p className="text-white font-bold">0.0005 $KAS</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-[#2A2A2A] border-[#46eac8]/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[#46eac8] font-bold">Initial Mcap</h4>
                      <p className="text-white font-bold">400,000 $KAS</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px]">
                <Image
                  src="/logo.svg"
                  alt="Jade Logo"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#46eac8]/20 to-transparent rounded-full animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How To Buy Section */}
      <section ref={refContentBuy} className="py-20 px-4 bg-[#2A2A2A]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#46eac8] mb-2">
              How To Start
            </h2>
            <h3 className="text-4xl font-bold text-white">
              How To Buy JADE Tokens
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Access KSPR Bot",
                description: (
                  <>
                    Open your telegram and navigate to the{" "}
                    <a
                      href="https://t.me/kspr_home_bot?start=YPwobQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#46eac8] hover:underline"
                    >
                      KSPR bot
                    </a>
                    .
                  </>
                ),
                icon: MessageCircle,
              },
              {
                step: 2,
                title: "Create or Import Wallet",
                description:
                  "Set up a new private wallet or import an existing one to the KSPR bot.",
                icon: Wallet,
              },
              {
                step: 3,
                title: "Fund Your Wallet",
                description:
                  "Add funds to your wallet to prepare for purchasing JADE tokens.",
                icon: CreditCard,
              },
              {
                step: 4,
                title: "Open Marketplace",
                description:
                  "In the KSPR bot, type and send the command '/marketplace' to access the token marketplace.",
                icon: Search,
              },
              {
                step: 5,
                title: "Find JADE Token",
                description:
                  "Type and send 'jade' to search for JADE token listings in the marketplace.",
                icon: Search,
              },
              {
                step: 6,
                title: "Purchase Tokens",
                description:
                  "Choose a suitable order based on your preferred price and complete the purchase of JADE tokens.",
                icon: DollarSign,
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="bg-[#1A1A1A] border-[#46eac8]/20 p-6 group hover:border-[#46eac8] transition-colors"
              >
                <div className="relative mb-4">
                  <item.icon className="w-12 h-12 text-[#46eac8]" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#46eac8] rounded-full flex items-center justify-center text-[#1A1A1A] font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <div className="text-white">
                  <h4 className="font-bold mb-2 text-[#46eac8]">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section ref={refContentRoadMap} id="roadmap" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#46eac8] mb-2">
              Our Journey
            </h2>
            <h3 className="text-4xl font-bold text-white">Jade Roadmap</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                quarter: "December 2024",
                title: "Launch",
                items: [
                  "Sell 100% Jade tokens",
                  "Establish community",
                  "Shilling in KSPR chats",
                ],
              },
              {
                quarter: "Mid December 2024",
                title: "Growth",
                items: [
                  "Listing on DEX and CEX",
                  "Marketing campaigns",
                  "Collabs",
                ],
              },
              {
                quarter: "End of December 2024",
                title: "Development",
                items: [
                  "Creating unique NFTs for holders of Jade",
                  "Starting development of DApp for minting from various wallets",
                ],
              },
              {
                quarter: "Coming soon",
                title: "Scaling",
                items: ["More collabs and listings", "Airdrop for holders"],
              },
            ].map((phase, index) => (
              <Card
                key={index}
                className="bg-[#1A1A1A] border-[#46eac8]/20 p-6 group hover:border-[#46eac8] transition-colors"
              >
                <div className="text-[#46eac8] font-bold mb-2">
                  {phase.quarter}
                </div>
                <h4 className="text-white text-xl font-bold mb-4">
                  {phase.title}
                </h4>
                <ul className="text-gray-400 space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#46eac8] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        ref={refContentContact}
        id="contact"
        className="py-20 px-4 bg-[#2A2A2A]"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#46eac8] mb-2">
              Connect With Us
            </h2>
            <h3 className="text-4xl font-bold text-white">
              Join Our Community
            </h3>
          </div>
          <div className="flex justify-center gap-8">
            <a
              href="https://t.me/+BkO_jvbpDiBmODMy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] rounded-lg border border-[#46eac8]/20 hover:border-[#46eac8] transition-colors group"
            >
              <MessageSquare className="w-6 h-6 text-[#46eac8]" />
              <span className="text-white group-hover:text-[#46eac8] transition-colors">
                Telegram
              </span>
            </a>
            <a
              href="https://x.com/JadeKRC20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] rounded-lg border border-[#46eac8]/20 hover:border-[#46eac8] transition-colors group"
            >
              <Twitter className="w-6 h-6 text-[#46eac8]" />
              <span className="text-white group-hover:text-[#46eac8] transition-colors">
                Twitter
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
