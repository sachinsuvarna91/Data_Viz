#!/bin/bash

	
        R1=`cat /sys/class/net/enp0s3/statistics/rx_bytes`
        T1=`cat /sys/class/net/enp0s3/statistics/tx_bytes`
        sleep 1
        R2=`cat /sys/class/net/enp0s3/statistics/rx_bytes`
        T2=`cat /sys/class/net/enp0s3/statistics/tx_bytes`
        TBPS=`expr $T2 - $T1`
        RBPS=`expr $R2 - $R1`
        TKBPS=`expr $TBPS / 1024`
        RKBPS=`expr $RBPS / 1024`
	
	tput=`expr $RKBPS - $TKBPS`
        echo "{'tx': $TKBPS, 'rx': $RKBPS, 'Tput': $tput}"


