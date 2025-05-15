import {
    CalendarIcon,
    CubeIcon,
    DownloadIcon,
    LapTimerIcon,
    RocketIcon,
    Share1Icon,
} from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata, ResolvingMetadata } from "next";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { humanDuration, humanSize } from "@/lib/utils";
import { SITENAME } from "@/lib/constants";
import Script from "next/script";

import { Button } from "@/components/ui/button";
import CopyButton from "@/components/copy-button";
import LikeButton from "@/components/like-button";
import Link from "next/link";
import MessageBox from "@/components/message-box";
import React from "react";
import SearchCardList from "@/components/search/search-list";
import doodstream from "@/lib/doodstream";

type PageProps = {
    params: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params }: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const data = await doodstream.getFile({ file_code: params.id as string });
     const upstream = await doodstream.getUpstream();
    if (data.status !== 200) {
        return {
            title: data.msg,
            description: "Something went wrong. Please try again later.",
        };
    }

    const file = data.result[0];
    const title = `Bokep ${file.title}`;
    const description = `Video Bokep ${file.title} di ${SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral`;
    const image = file.splash_img;
    const previousOgImages = (await parent).openGraph?.images || [];
    const previousTwImages = (await parent).twitter?.images || [];

    return {
        title,
        description,
        twitter: {
            title,
            description,
            images: [...previousTwImages, image],
        },
        openGraph: {
            title,
            description,
            images: [...previousOgImages, image],
            url: `/v/${file.filecode}`,
            type: `article`,
        },
        alternates: {
            canonical: `/v/${file.filecode}`,
        },
    };
}

export default async function Video({ params }: PageProps) {
    const data = await doodstream.getFile({ file_code: params.id as string });
    const upstream = await doodstream.getUpstream();

    if (data.status !== 200) {
        return (
            <MessageBox title={data.msg} countdown={30} variant="error">
                <p className="text-center">
                    Something went wrong. Please try again later.
                </p>
            </MessageBox>
        );
    }

    const file = data.result[0];
	const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: `Bokep ${file.title}`,
        thumbnailUrl: file.splash_img,
        description: `Video Bokep ${file.title} di ${SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral`,
        url: `https://bokepbinorviral.pages.dev/v/${file.filecode}`,
        embedUrl: `https://doodstream.com/e/${file.filecode}`,
        uploadDate: new Date(
            file.uploaded + ".000Z"
        ).toISOString(),
        publisher: {
            '@type': 'Organization',
            name: `${SITENAME}`,
            logo: 'https://bokepbinorviral.pages.dev/favicon.ico'},
            author: {
                '@type': 'Person',
                name: 'admin',
                url: 'https://bokepbinorviral.pages.dev'
              }
        }
        const jsonLd2 = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `Bokep ${file.title}`,
        image: file.splash_img,
        description: `Video Bokep ${file.title} di ${SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral`,
        url: `https://bokepbinorviral.pages.dev/v/${file.filecode}`,
        datePublished: new Date(
            file.uploaded + ".000Z"
        ).toISOString(),
        publisher: {
            '@type': 'Organization',
            name: `${SITENAME}`,
            logo: 'https://bokepbinorviral.pages.dev/favicon.ico'},
            author: {
                '@type': 'Person',
                name: 'admin',
                url: 'https://bokepbinorviral.pages.dev'
              }
        }
        
    return (
        <div className="grid col-span-full gap-4 md:gap-4 md:mx-10">
        <section>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
        {/* ... */}
        </section>
            <iframe
                className="w-full h-[90vh] md:h-[90vh] lg:h-[90vh]"
                src={`https://doodstream.com/e/${file.filecode}`}
                scrolling="no"
                title={file.title}
                frameBorder={0}
                allowFullScreen={true}
            ></iframe>
            <Card className="mx-2 mb-8">
                <CardHeader>
                    <CardTitle className="text-xl md:text-3xl font-bold">
                        {file.title}
                    </CardTitle>
                </CardHeader>
            </Card>
<center><Script dangerouslySetInnerHTML={{__html: `(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1078976})`,}}/>
<Script data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"/>
<ins id="1078976" data-width="300" data-height="112"></ins></center>
            <p>{file.title} di {SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot abg cewek pijat pelajar Hijab Abg Colmek Film Tante Hot Twitter Asia Download Live stw <a href="https://bokepviralabg.pages.dev/c/1379174">Bokep Bocil</a> situs bokep indonesia jepang barat korea japan jav cina japanese <a href="https://bokepviralabg.pages.dev/c/485581">Bokep Indo</a> china rusia arab india thailand nonton link sd crot playbokep simontok bokepin montok baru perawan anak kecil <a href="https://bokepviralabg.pages.dev/c/1379173">Bokep Jepang</a> telegram selingkuh ojol cantik gay vidio lokal artis pelajar janda streaming <a href="https://bokepviralabg.pages.dev/c/1379183">Bokep Perkosa</a> hd anime hentai bokepind gudang avtub pijat sotwe <a href="https://bokepviralabg.pages.dev/c/1379179">Bokep Jilbab</a> rumah pemerkosaan inggris xpanas pure tobrut vcs ngintip binor remaja yandex update <a href="https://bokepviralabg.pages.dev/c/1379181">Bokep Smp</a> perselingkuhan wiki raja full com porno indoh</p>
            <h2 className="text-2xl font-bold text-center my-4">
                Related Video {file.title}
            </h2>
<center><Script dangerouslySetInnerHTML={{__html: `(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1058210})`,}}/>
<Script data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"/>
<ins id="1058210" data-width="300" data-height="262"></ins></center>
            <SearchCardList query={file.title.split(" ")[2]} />
<Script src="https://js.juicyads.com/jp.php?c=947403z2v256s2x2x294z2b4&u=http%3A%2F%2Fwww.juicyads.rocks"/>
        </div>
    );
}
