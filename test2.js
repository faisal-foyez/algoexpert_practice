const fs = require('fs');

const data = [
	{
		"shop_id" : 1070
	},
	{
		"shop_id" : 73
	},
	{
		"shop_id" : 84
	},
	{
		"shop_id" : 85
	},
	{
		"shop_id" : 86
	},
	{
		"shop_id" : 994
	},
	{
		"shop_id" : 973
	},
	{
		"shop_id" : 950
	},
	{
		"shop_id" : 970
	},
	{
		"shop_id" : 88
	},
	{
		"shop_id" : 77
	},
	{
		"shop_id" : 1117
	},
	{
		"shop_id" : 90
	},
	{
		"shop_id" : 1116
	},
	{
		"shop_id" : 971
	},
	{
		"shop_id" : 1173
	},
	{
		"shop_id" : 1205
	},
	{
		"shop_id" : 1210
	},
	{
		"shop_id" : 1281
	},
	{
		"shop_id" : 1344
	},
	{
		"shop_id" : 1339
	},
	{
		"shop_id" : 75
	},
	{
		"shop_id" : 1351
	},
	{
		"shop_id" : 1362
	},
	{
		"shop_id" : 1385
	},
	{
		"shop_id" : 1389
	},
	{
		"shop_id" : 1579
	},
	{
		"shop_id" : 83
	},
	{
		"shop_id" : 1711
	},
	{
		"shop_id" : 1735
	},
	{
		"shop_id" : 1751
	},
	{
		"shop_id" : 2152
	},
	{
		"shop_id" : 2235
	},
	{
		"shop_id" : 2230
	},
	{
		"shop_id" : 2227
	},
	{
		"shop_id" : 2249
	},
	{
		"shop_id" : 2270
	},
	{
		"shop_id" : 2268
	},
	{
		"shop_id" : 2281
	},
	{
		"shop_id" : 869
	},
	{
		"shop_id" : 2153
	},
	{
		"shop_id" : 2676
	},
	{
		"shop_id" : 995
	},
	{
		"shop_id" : 2727
	},
	{
		"shop_id" : 2513
	},
	{
		"shop_id" : 2731
	},
	{
		"shop_id" : 570
	},
	{
		"shop_id" : 2813
	},
	{
		"shop_id" : 2514
	},
	{
		"shop_id" : 3043
	},
	{
		"shop_id" : 3061
	},
	{
		"shop_id" : 3150
	},
	{
		"shop_id" : 974
	},
	{
		"shop_id" : 3167
	},
	{
		"shop_id" : 3182
	},
	{
		"shop_id" : 3192
	},
	{
		"shop_id" : 3151
	},
	{
		"shop_id" : 3202
	},
	{
		"shop_id" : 71
	},
	{
		"shop_id" : 3239
	},
	{
		"shop_id" : 3294
	},
	{
		"shop_id" : 1027
	},
	{
		"shop_id" : 3360
	},
	{
		"shop_id" : 3373
	},
	{
		"shop_id" : 521
	},
	{
		"shop_id" : 3391
	},
	{
		"shop_id" : 3388
	},
	{
		"shop_id" : 3392
	},
	{
		"shop_id" : 3362
	},
	{
		"shop_id" : 3295
	},
	{
		"shop_id" : 1022
	},
	{
		"shop_id" : 3658
	},
	{
		"shop_id" : 3661
	},
	{
		"shop_id" : 2075
	},
	{
		"shop_id" : 3706
	},
	{
		"shop_id" : 3730
	},
	{
		"shop_id" : 3737
	},
	{
		"shop_id" : 3852
	},
	{
		"shop_id" : 3866
	},
	{
		"shop_id" : 3665
	},
	{
		"shop_id" : 3906
	},
	{
		"shop_id" : 3913
	},
	{
		"shop_id" : 3363
	},
	{
		"shop_id" : 3528
	},
	{
		"shop_id" : 4301
	},
	{
		"shop_id" : 4577
	},
	{
		"shop_id" : 3203
	},
	{
		"shop_id" : 4863
	},
	{
		"shop_id" : 4899
	},
	{
		"shop_id" : 4952
	},
	{
		"shop_id" : 4943
	},
	{
		"shop_id" : 4928
	},
	{
		"shop_id" : 4228
	},
	{
		"shop_id" : 2351
	},
	{
		"shop_id" : 3449
	},
	{
		"shop_id" : 5350
	},
	{
		"shop_id" : 848
	},
	{
		"shop_id" : 4533
	},
	{
		"shop_id" : 5116
	},
	{
		"shop_id" : 5561
	},
	{
		"shop_id" : 5675
	},
	{
		"shop_id" : 5719
	},
	{
		"shop_id" : 5713
	},
	{
		"shop_id" : 4957
	},
	{
		"shop_id" : 5857
	},
	{
		"shop_id" : 5851
	},
	{
		"shop_id" : 5886
	},
	{
		"shop_id" : 301
	},
	{
		"shop_id" : 3693
	},
	{
		"shop_id" : 5922
	},
	{
		"shop_id" : 5930
	},
	{
		"shop_id" : 6014
	},
	{
		"shop_id" : 6029
	},
	{
		"shop_id" : 6036
	},
	{
		"shop_id" : 6085
	},
	{
		"shop_id" : 6081
	},
	{
		"shop_id" : 6112
	},
	{
		"shop_id" : 6141
	},
	{
		"shop_id" : 6309
	},
	{
		"shop_id" : 6362
	},
	{
		"shop_id" : 6364
	},
	{
		"shop_id" : 6779
	},
	{
		"shop_id" : 7097
	},
	{
		"shop_id" : 7161
	},
	{
		"shop_id" : 7312
	},
	{
		"shop_id" : 7435
	},
	{
		"shop_id" : 7447
	},
	{
		"shop_id" : 7748
	},
	{
		"shop_id" : 7753
	},
	{
		"shop_id" : 7797
	},
	{
		"shop_id" : 7896
	},
	{
		"shop_id" : 8030
	},
	{
		"shop_id" : 7155
	},
	{
		"shop_id" : 3793
	},
	{
		"shop_id" : 8037
	},
	{
		"shop_id" : 8034
	},
	{
		"shop_id" : 8460
	},
	{
		"shop_id" : 8746
	},
	{
		"shop_id" : 8751
	},
	{
		"shop_id" : 8779
	},
	{
		"shop_id" : 8884
	},
	{
		"shop_id" : 9211
	},
	{
		"shop_id" : 9234
	},
	{
		"shop_id" : 8768
	},
	{
		"shop_id" : 9374
	},
	{
		"shop_id" : 9447
	},
	{
		"shop_id" : 845
	},
	{
		"shop_id" : 9661
	},
	{
		"shop_id" : 9657
	},
	{
		"shop_id" : 9780
	},
	{
		"shop_id" : 9977
	},
	{
		"shop_id" : 10064
	},
	{
		"shop_id" : 10110
	},
	{
		"shop_id" : 10116
	},
	{
		"shop_id" : 10272
	},
	{
		"shop_id" : 2662
	},
	{
		"shop_id" : 3940
	},
	{
		"shop_id" : 9662
	},
	{
		"shop_id" : 10347
	},
	{
		"shop_id" : 10393
	},
	{
		"shop_id" : 10480
	},
	{
		"shop_id" : 257
	},
	{
		"shop_id" : 10529
	},
	{
		"shop_id" : 10537
	},
	{
		"shop_id" : 11796
	},
	{
		"shop_id" : 15728
	},
	{
		"shop_id" : 3076
	},
	{
		"shop_id" : 16117
	},
	{
		"shop_id" : 15745
	},
	{
		"shop_id" : 16462
	},
	{
		"shop_id" : 16481
	},
	{
		"shop_id" : 4724
	},
	{
		"shop_id" : 16826
	},
	{
		"shop_id" : 16883
	},
	{
		"shop_id" : 16911
	},
	{
		"shop_id" : 1155
	},
	{
		"shop_id" : 17887
	},
	{
		"shop_id" : 18624
	},
	{
		"shop_id" : 19096
	},
	{
		"shop_id" : 20353
	},
	{
		"shop_id" : 20900
	},
	{
		"shop_id" : 21050
	},
	{
		"shop_id" : 21057
	},
	{
		"shop_id" : 21322
	},
	{
		"shop_id" : 22187
	},
	{
		"shop_id" : 22613
	},
	{
		"shop_id" : 22691
	},
	{
		"shop_id" : 18332
	},
	{
		"shop_id" : 3385
	},
	{
		"shop_id" : 22846
	},
	{
		"shop_id" : 25153
	},
	{
		"shop_id" : 25631
	},
	{
		"shop_id" : 25339
	},
	{
		"shop_id" : 3034
	},
	{
		"shop_id" : 25983
	},
	{
		"shop_id" : 27213
	},
	{
		"shop_id" : 27714
	},
	{
		"shop_id" : 28628
	},
	{
		"shop_id" : 25667
	},
	{
		"shop_id" : 2652
	},
	{
		"shop_id" : 21316
	},
	{
		"shop_id" : 30425
	},
	{
		"shop_id" : 19071
	},
	{
		"shop_id" : 32892
	},
	{
		"shop_id" : 33030
	},
	{
		"shop_id" : 3573
	},
	{
		"shop_id" : 33679
	},
	{
		"shop_id" : 30675
	},
	{
		"shop_id" : 34408
	},
	{
		"shop_id" : 3282
	},
	{
		"shop_id" : 29097
	},
	{
		"shop_id" : 35713
	},
	{
		"shop_id" : 16459
	},
	{
		"shop_id" : 35803
	},
	{
		"shop_id" : 35856
	},
	{
		"shop_id" : 37713
	},
	{
		"shop_id" : 38251
	},
	{
		"shop_id" : 38212
	},
	{
		"shop_id" : 38381
	},
	{
		"shop_id" : 38238
	},
	{
		"shop_id" : 39447
	},
	{
		"shop_id" : 42558
	},
	{
		"shop_id" : 45100
	},
	{
		"shop_id" : 345
	},
	{
		"shop_id" : 45737
	},
	{
		"shop_id" : 46090
	},
	{
		"shop_id" : 46835
	},
	{
		"shop_id" : 47392
	},
	{
		"shop_id" : 47211
	},
	{
		"shop_id" : 49298
	},
	{
		"shop_id" : 49479
	},
	{
		"shop_id" : 51930
	},
	{
		"shop_id" : 52075
	},
	{
		"shop_id" : 11412
	},
	{
		"shop_id" : 52213
	},
	{
		"shop_id" : 53132
	},
	{
		"shop_id" : 53241
	},
	{
		"shop_id" : 2112
	},
	{
		"shop_id" : 55055
	},
	{
		"shop_id" : 57574
	},
	{
		"shop_id" : 57910
	},
	{
		"shop_id" : 59587
	},
	{
		"shop_id" : 16463
	},
	{
		"shop_id" : 59077
	},
	{
		"shop_id" : 60833
	},
	{
		"shop_id" : 61038
	},
	{
		"shop_id" : 7783
	},
	{
		"shop_id" : 63643
	},
	{
		"shop_id" : 64122
	},
	{
		"shop_id" : 64130
	},
	{
		"shop_id" : 60170
	},
	{
		"shop_id" : 3001
	},
	{
		"shop_id" : 72480
	},
	{
		"shop_id" : 73248
	},
	{
		"shop_id" : 74316
	},
	{
		"shop_id" : 74680
	},
	{
		"shop_id" : 74925
	},
	{
		"shop_id" : 75274
	},
	{
		"shop_id" : 75425
	},
	{
		"shop_id" : 75489
	},
	{
		"shop_id" : 379
	},
	{
		"shop_id" : 76574
	},
	{
		"shop_id" : 77042
	},
	{
		"shop_id" : 70240
	},
	{
		"shop_id" : 78840
	},
	{
		"shop_id" : 74969
	},
	{
		"shop_id" : 79914
	},
	{
		"shop_id" : 9465
	},
	{
		"shop_id" : 79971
	},
	{
		"shop_id" : 79981
	},
	{
		"shop_id" : 80240
	},
	{
		"shop_id" : 80322
	},
	{
		"shop_id" : 80377
	},
	{
		"shop_id" : 7576
	},
	{
		"shop_id" : 80421
	},
	{
		"shop_id" : 80700
	},
	{
		"shop_id" : 80773
	},
	{
		"shop_id" : 81238
	},
	{
		"shop_id" : 81318
	},
	{
		"shop_id" : 229
	},
	{
		"shop_id" : 82504
	},
	{
		"shop_id" : 82546
	},
	{
		"shop_id" : 82939
	},
	{
		"shop_id" : 5490
	},
	{
		"shop_id" : 83524
	},
	{
		"shop_id" : 77445
	},
	{
		"shop_id" : 83563
	},
	{
		"shop_id" : 83616
	},
	{
		"shop_id" : 83650
	},
	{
		"shop_id" : 84678
	},
	{
		"shop_id" : 85359
	},
	{
		"shop_id" : 85914
	},
	{
		"shop_id" : 85679
	},
	{
		"shop_id" : 85351
	},
	{
		"shop_id" : 87274
	},
	{
		"shop_id" : 87766
	},
	{
		"shop_id" : 7284
	},
	{
		"shop_id" : 88897
	},
	{
		"shop_id" : 88943
	},
	{
		"shop_id" : 89492
	},
	{
		"shop_id" : 89219
	},
	{
		"shop_id" : 89772
	},
	{
		"shop_id" : 90073
	},
	{
		"shop_id" : 90177
	},
	{
		"shop_id" : 90196
	},
	{
		"shop_id" : 10114
	},
	{
		"shop_id" : 90424
	},
	{
		"shop_id" : 90796
	},
	{
		"shop_id" : 90808
	},
	{
		"shop_id" : 90839
	},
	{
		"shop_id" : 90843
	},
	{
		"shop_id" : 5630
	},
	{
		"shop_id" : 91009
	},
	{
		"shop_id" : 91036
	},
	{
		"shop_id" : 79960
	},
	{
		"shop_id" : 91080
	},
	{
		"shop_id" : 91248
	},
	{
		"shop_id" : 91257
	},
	{
		"shop_id" : 91276
	},
	{
		"shop_id" : 3015
	},
	{
		"shop_id" : 91816
	},
	{
		"shop_id" : 92170
	},
	{
		"shop_id" : 92169
	},
	{
		"shop_id" : 85991
	},
	{
		"shop_id" : 90913
	},
	{
		"shop_id" : 93103
	},
	{
		"shop_id" : 93902
	},
	{
		"shop_id" : 94567
	},
	{
		"shop_id" : 834
	},
	{
		"shop_id" : 95030
	},
	{
		"shop_id" : 95728
	},
	{
		"shop_id" : 96055
	},
	{
		"shop_id" : 92240
	},
	{
		"shop_id" : 95845
	},
	{
		"shop_id" : 96684
	},
	{
		"shop_id" : 96705
	},
	{
		"shop_id" : 96769
	},
	{
		"shop_id" : 96942
	},
	{
		"shop_id" : 97130
	},
	{
		"shop_id" : 97878
	},
	{
		"shop_id" : 100170
	},
	{
		"shop_id" : 102480
	},
	{
		"shop_id" : 104805
	},
	{
		"shop_id" : 106610
	},
	{
		"shop_id" : 106699
	},
	{
		"shop_id" : 109143
	},
	{
		"shop_id" : 5372
	},
	{
		"shop_id" : 109309
	},
	{
		"shop_id" : 109201
	},
	{
		"shop_id" : 110097
	},
	{
		"shop_id" : 110102
	},
	{
		"shop_id" : 110238
	},
	{
		"shop_id" : 79961
	},
	{
		"shop_id" : 111402
	},
	{
		"shop_id" : 111405
	},
	{
		"shop_id" : 111546
	},
	{
		"shop_id" : 111595
	},
	{
		"shop_id" : 111830
	},
	{
		"shop_id" : 111871
	},
	{
		"shop_id" : 111948
	},
	{
		"shop_id" : 783
	},
	{
		"shop_id" : 110564
	},
	{
		"shop_id" : 112603
	},
	{
		"shop_id" : 112895
	},
	{
		"shop_id" : 112929
	},
	{
		"shop_id" : 112934
	},
	{
		"shop_id" : 113171
	},
	{
		"shop_id" : 5640
	},
	{
		"shop_id" : 113453
	},
	{
		"shop_id" : 113617
	},
	{
		"shop_id" : 114063
	},
	{
		"shop_id" : 114114
	},
	{
		"shop_id" : 114319
	},
	{
		"shop_id" : 114337
	},
	{
		"shop_id" : 114910
	},
	{
		"shop_id" : 114920
	},
	{
		"shop_id" : 114946
	},
	{
		"shop_id" : 114954
	},
	{
		"shop_id" : 115003
	},
	{
		"shop_id" : 101682
	},
	{
		"shop_id" : 115443
	},
	{
		"shop_id" : 115811
	},
	{
		"shop_id" : 115846
	},
	{
		"shop_id" : 115942
	},
	{
		"shop_id" : 116438
	},
	{
		"shop_id" : 116981
	},
	{
		"shop_id" : 117003
	},
	{
		"shop_id" : 117264
	},
	{
		"shop_id" : 117278
	},
	{
		"shop_id" : 117280
	},
	{
		"shop_id" : 112547
	},
	{
		"shop_id" : 117900
	},
	{
		"shop_id" : 118096
	},
	{
		"shop_id" : 118111
	},
	{
		"shop_id" : 118473
	},
	{
		"shop_id" : 118730
	},
	{
		"shop_id" : 118795
	},
	{
		"shop_id" : 118741
	},
	{
		"shop_id" : 119112
	},
	{
		"shop_id" : 119136
	},
	{
		"shop_id" : 119360
	},
	{
		"shop_id" : 119501
	},
	{
		"shop_id" : 119502
	},
	{
		"shop_id" : 119516
	},
	{
		"shop_id" : 119558
	},
	{
		"shop_id" : 119793
	},
	{
		"shop_id" : 119879
	},
	{
		"shop_id" : 119893
	},
	{
		"shop_id" : 2741
	},
	{
		"shop_id" : 119909
	},
	{
		"shop_id" : 120101
	},
	{
		"shop_id" : 120111
	},
	{
		"shop_id" : 972
	},
	{
		"shop_id" : 120262
	},
	{
		"shop_id" : 120280
	},
	{
		"shop_id" : 120551
	},
	{
		"shop_id" : 120648
	},
	{
		"shop_id" : 120841
	},
	{
		"shop_id" : 363
	},
	{
		"shop_id" : 120842
	},
	{
		"shop_id" : 120820
	},
	{
		"shop_id" : 120878
	},
	{
		"shop_id" : 120996
	},
	{
		"shop_id" : 121048
	},
	{
		"shop_id" : 121076
	},
	{
		"shop_id" : 121090
	},
	{
		"shop_id" : 121325
	},
	{
		"shop_id" : 121329
	},
	{
		"shop_id" : 121386
	},
	{
		"shop_id" : 121499
	},
	{
		"shop_id" : 121502
	},
	{
		"shop_id" : 121503
	},
	{
		"shop_id" : 121506
	},
	{
		"shop_id" : 121640
	},
	{
		"shop_id" : 121652
	},
	{
		"shop_id" : 121683
	},
	{
		"shop_id" : 121792
	},
	{
		"shop_id" : 121941
	},
	{
		"shop_id" : 122082
	},
	{
		"shop_id" : 122080
	},
	{
		"shop_id" : 121986
	},
	{
		"shop_id" : 122385
	},
	{
		"shop_id" : 122358
	},
	{
		"shop_id" : 122554
	},
	{
		"shop_id" : 122876
	},
	{
		"shop_id" : 122820
	},
	{
		"shop_id" : 123396
	},
	{
		"shop_id" : 123645
	},
	{
		"shop_id" : 123649
	},
	{
		"shop_id" : 123662
	},
	{
		"shop_id" : 123705
	},
	{
		"shop_id" : 123988
	},
	{
		"shop_id" : 123989
	},
	{
		"shop_id" : 124210
	},
	{
		"shop_id" : 124486
	},
	{
		"shop_id" : 124505
	},
	{
		"shop_id" : 124515
	},
	{
		"shop_id" : 124557
	},
	{
		"shop_id" : 124552
	},
	{
		"shop_id" : 124565
	},
	{
		"shop_id" : 124573
	},
	{
		"shop_id" : 124739
	},
	{
		"shop_id" : 124911
	},
	{
		"shop_id" : 125141
	},
	{
		"shop_id" : 124962
	},
	{
		"shop_id" : 125142
	},
	{
		"shop_id" : 125144
	},
	{
		"shop_id" : 125169
	},
	{
		"shop_id" : 51958
	},
	{
		"shop_id" : 17643
	},
	{
		"shop_id" : 125572
	},
	{
		"shop_id" : 125636
	},
	{
		"shop_id" : 126037
	},
	{
		"shop_id" : 126073
	},
	{
		"shop_id" : 126218
	},
	{
		"shop_id" : 126234
	},
	{
		"shop_id" : 126269
	},
	{
		"shop_id" : 126408
	},
	{
		"shop_id" : 126286
	},
	{
		"shop_id" : 82557
	},
	{
		"shop_id" : 126842
	},
	{
		"shop_id" : 127042
	},
	{
		"shop_id" : 127044
	},
	{
		"shop_id" : 127055
	},
	{
		"shop_id" : 127619
	},
	{
		"shop_id" : 127670
	},
	{
		"shop_id" : 16269
	},
	{
		"shop_id" : 127957
	},
	{
		"shop_id" : 128194
	},
	{
		"shop_id" : 119873
	},
	{
		"shop_id" : 52228
	},
	{
		"shop_id" : 128457
	},
	{
		"shop_id" : 128669
	},
	{
		"shop_id" : 128686
	},
	{
		"shop_id" : 128850
	},
	{
		"shop_id" : 129203
	},
	{
		"shop_id" : 129220
	},
	{
		"shop_id" : 129345
	},
	{
		"shop_id" : 129358
	},
	{
		"shop_id" : 129504
	},
	{
		"shop_id" : 126042
	},
	{
		"shop_id" : 130562
	},
	{
		"shop_id" : 130610
	},
	{
		"shop_id" : 131227
	},
	{
		"shop_id" : 131230
	},
	{
		"shop_id" : 131276
	},
	{
		"shop_id" : 131280
	},
	{
		"shop_id" : 131694
	},
	{
		"shop_id" : 131916
	},
	{
		"shop_id" : 131931
	},
	{
		"shop_id" : 94605
	},
	{
		"shop_id" : 131982
	},
	{
		"shop_id" : 132245
	},
	{
		"shop_id" : 131228
	},
	{
		"shop_id" : 132824
	},
	{
		"shop_id" : 132852
	},
	{
		"shop_id" : 132901
	},
	{
		"shop_id" : 132184
	},
	{
		"shop_id" : 133533
	},
	{
		"shop_id" : 132178
	},
	{
		"shop_id" : 20912
	},
	{
		"shop_id" : 132179
	},
	{
		"shop_id" : 132183
	},
	{
		"shop_id" : 132182
	},
	{
		"shop_id" : 3867
	},
	{
		"shop_id" : 132176
	},
	{
		"shop_id" : 132174
	},
	{
		"shop_id" : 91330
	},
	{
		"shop_id" : 132181
	},
	{
		"shop_id" : 132191
	},
	{
		"shop_id" : 132193
	},
	{
		"shop_id" : 132195
	},
	{
		"shop_id" : 132196
	},
	{
		"shop_id" : 132194
	},
	{
		"shop_id" : 132197
	},
	{
		"shop_id" : 132199
	},
	{
		"shop_id" : 132201
	},
	{
		"shop_id" : 132202
	},
	{
		"shop_id" : 132203
	},
	{
		"shop_id" : 132204
	},
	{
		"shop_id" : 132205
	},
	{
		"shop_id" : 132206
	},
	{
		"shop_id" : 132200
	},
	{
		"shop_id" : 132207
	},
	{
		"shop_id" : 132208
	},
	{
		"shop_id" : 132209
	},
	{
		"shop_id" : 132211
	},
	{
		"shop_id" : 132212
	},
	{
		"shop_id" : 132213
	},
	{
		"shop_id" : 131707
	},
	{
		"shop_id" : 132215
	},
	{
		"shop_id" : 132216
	},
	{
		"shop_id" : 110766
	},
	{
		"shop_id" : 132217
	},
	{
		"shop_id" : 132220
	},
	{
		"shop_id" : 132221
	},
	{
		"shop_id" : 132219
	},
	{
		"shop_id" : 132218
	},
	{
		"shop_id" : 132222
	},
	{
		"shop_id" : 1852
	},
	{
		"shop_id" : 132223
	},
	{
		"shop_id" : 132225
	},
	{
		"shop_id" : 132228
	},
	{
		"shop_id" : 132226
	},
	{
		"shop_id" : 132230
	},
	{
		"shop_id" : 132229
	},
	{
		"shop_id" : 32908
	},
	{
		"shop_id" : 132227
	},
	{
		"shop_id" : 132231
	},
	{
		"shop_id" : 132232
	},
	{
		"shop_id" : 132234
	},
	{
		"shop_id" : 132236
	},
	{
		"shop_id" : 132237
	},
	{
		"shop_id" : 80356
	},
	{
		"shop_id" : 132238
	},
	{
		"shop_id" : 121681
	},
	{
		"shop_id" : 132240
	},
	{
		"shop_id" : 132239
	},
	{
		"shop_id" : 132241
	},
	{
		"shop_id" : 133534
	},
	{
		"shop_id" : 116
	},
	{
		"shop_id" : 133547
	},
	{
		"shop_id" : 133546
	},
	{
		"shop_id" : 133548
	},
	{
		"shop_id" : 133549
	},
	{
		"shop_id" : 133551
	},
	{
		"shop_id" : 133553
	},
	{
		"shop_id" : 133554
	},
	{
		"shop_id" : 133558
	},
	{
		"shop_id" : 6144
	},
	{
		"shop_id" : 133561
	},
	{
		"shop_id" : 133562
	},
	{
		"shop_id" : 133560
	},
	{
		"shop_id" : 133574
	},
	{
		"shop_id" : 133576
	},
	{
		"shop_id" : 133572
	},
	{
		"shop_id" : 133575
	},
	{
		"shop_id" : 133569
	},
	{
		"shop_id" : 133567
	},
	{
		"shop_id" : 133579
	},
	{
		"shop_id" : 133568
	},
	{
		"shop_id" : 133570
	},
	{
		"shop_id" : 133588
	},
	{
		"shop_id" : 133566
	},
	{
		"shop_id" : 133565
	},
	{
		"shop_id" : 133571
	},
	{
		"shop_id" : 133580
	},
	{
		"shop_id" : 133577
	},
	{
		"shop_id" : 133597
	},
	{
		"shop_id" : 133599
	},
	{
		"shop_id" : 133598
	},
	{
		"shop_id" : 133601
	},
	{
		"shop_id" : 133578
	},
	{
		"shop_id" : 133590
	},
	{
		"shop_id" : 133584
	},
	{
		"shop_id" : 133581
	},
	{
		"shop_id" : 133587
	},
	{
		"shop_id" : 133582
	},
	{
		"shop_id" : 133583
	},
	{
		"shop_id" : 133586
	},
	{
		"shop_id" : 133585
	},
	{
		"shop_id" : 133594
	},
	{
		"shop_id" : 133591
	},
	{
		"shop_id" : 133592
	},
	{
		"shop_id" : 133589
	},
	{
		"shop_id" : 133563
	},
	{
		"shop_id" : 133603
	},
	{
		"shop_id" : 133608
	},
	{
		"shop_id" : 133593
	},
	{
		"shop_id" : 133596
	},
	{
		"shop_id" : 133609
	},
	{
		"shop_id" : 133611
	},
	{
		"shop_id" : 133605
	},
	{
		"shop_id" : 133614
	},
	{
		"shop_id" : 133615
	},
	{
		"shop_id" : 133616
	},
	{
		"shop_id" : 133613
	},
	{
		"shop_id" : 133610
	},
	{
		"shop_id" : 133618
	},
	{
		"shop_id" : 133612
	},
	{
		"shop_id" : 133619
	},
	{
		"shop_id" : 133620
	},
	{
		"shop_id" : 133621
	},
	{
		"shop_id" : 133622
	},
	{
		"shop_id" : 133626
	},
	{
		"shop_id" : 133624
	},
	{
		"shop_id" : 133629
	},
	{
		"shop_id" : 133631
	},
	{
		"shop_id" : 133632
	},
	{
		"shop_id" : 133627
	},
	{
		"shop_id" : 133634
	},
	{
		"shop_id" : 133635
	},
	{
		"shop_id" : 133638
	},
	{
		"shop_id" : 133640
	},
	{
		"shop_id" : 133628
	},
	{
		"shop_id" : 133637
	},
	{
		"shop_id" : 133641
	},
	{
		"shop_id" : 133625
	},
	{
		"shop_id" : 133646
	},
	{
		"shop_id" : 133643
	},
	{
		"shop_id" : 133649
	},
	{
		"shop_id" : 133647
	},
	{
		"shop_id" : 133650
	},
	{
		"shop_id" : 133652
	},
	{
		"shop_id" : 133654
	},
	{
		"shop_id" : 133644
	},
	{
		"shop_id" : 133651
	},
	{
		"shop_id" : 133656
	},
	{
		"shop_id" : 133658
	},
	{
		"shop_id" : 133655
	},
	{
		"shop_id" : 133657
	},
	{
		"shop_id" : 133659
	},
	{
		"shop_id" : 133648
	},
	{
		"shop_id" : 133661
	},
	{
		"shop_id" : 133662
	},
	{
		"shop_id" : 133663
	},
	{
		"shop_id" : 133665
	},
	{
		"shop_id" : 133666
	},
	{
		"shop_id" : 133668
	},
	{
		"shop_id" : 133671
	},
	{
		"shop_id" : 133670
	},
	{
		"shop_id" : 133672
	},
	{
		"shop_id" : 133667
	},
	{
		"shop_id" : 3895
	},
	{
		"shop_id" : 133675
	},
	{
		"shop_id" : 133676
	},
	{
		"shop_id" : 133677
	},
	{
		"shop_id" : 133678
	},
	{
		"shop_id" : 133679
	},
	{
		"shop_id" : 133682
	},
	{
		"shop_id" : 133681
	},
	{
		"shop_id" : 133683
	},
	{
		"shop_id" : 133684
	},
	{
		"shop_id" : 133686
	},
	{
		"shop_id" : 133688
	},
	{
		"shop_id" : 133689
	},
	{
		"shop_id" : 133687
	},
	{
		"shop_id" : 133685
	},
	{
		"shop_id" : 133690
	},
	{
		"shop_id" : 133692
	},
	{
		"shop_id" : 133694
	},
	{
		"shop_id" : 133700
	},
	{
		"shop_id" : 133698
	},
	{
		"shop_id" : 133701
	},
	{
		"shop_id" : 133702
	},
	{
		"shop_id" : 133703
	},
	{
		"shop_id" : 133680
	},
	{
		"shop_id" : 133707
	},
	{
		"shop_id" : 133708
	},
	{
		"shop_id" : 133706
	},
	{
		"shop_id" : 133712
	},
	{
		"shop_id" : 133711
	},
	{
		"shop_id" : 133713
	},
	{
		"shop_id" : 133697
	},
	{
		"shop_id" : 133715
	},
	{
		"shop_id" : 133714
	},
	{
		"shop_id" : 133716
	},
	{
		"shop_id" : 133710
	},
	{
		"shop_id" : 133720
	},
	{
		"shop_id" : 133721
	},
	{
		"shop_id" : 133718
	},
	{
		"shop_id" : 133722
	},
	{
		"shop_id" : 133726
	},
	{
		"shop_id" : 133723
	},
	{
		"shop_id" : 133728
	},
	{
		"shop_id" : 122430
	},
	{
		"shop_id" : 133729
	},
	{
		"shop_id" : 133731
	},
	{
		"shop_id" : 133733
	},
	{
		"shop_id" : 133735
	},
	{
		"shop_id" : 133736
	},
	{
		"shop_id" : 133738
	},
	{
		"shop_id" : 133737
	},
	{
		"shop_id" : 133734
	},
	{
		"shop_id" : 133739
	},
	{
		"shop_id" : 133744
	},
	{
		"shop_id" : 133747
	},
	{
		"shop_id" : 133745
	},
	{
		"shop_id" : 133746
	},
	{
		"shop_id" : 133750
	},
	{
		"shop_id" : 133749
	},
	{
		"shop_id" : 133755
	},
	{
		"shop_id" : 133748
	},
	{
		"shop_id" : 133751
	},
	{
		"shop_id" : 133756
	},
	{
		"shop_id" : 133754
	},
	{
		"shop_id" : 133757
	},
	{
		"shop_id" : 133753
	},
	{
		"shop_id" : 133759
	},
	{
		"shop_id" : 133760
	},
	{
		"shop_id" : 133762
	},
	{
		"shop_id" : 133763
	},
	{
		"shop_id" : 133764
	},
	{
		"shop_id" : 133766
	},
	{
		"shop_id" : 133768
	},
	{
		"shop_id" : 133767
	},
	{
		"shop_id" : 133769
	},
	{
		"shop_id" : 133770
	},
	{
		"shop_id" : 133772
	},
	{
		"shop_id" : 133771
	},
	{
		"shop_id" : 133773
	},
	{
		"shop_id" : 133774
	},
	{
		"shop_id" : 133779
	},
	{
		"shop_id" : 133778
	},
	{
		"shop_id" : 133741
	},
	{
		"shop_id" : 133782
	},
	{
		"shop_id" : 133780
	},
	{
		"shop_id" : 133783
	},
	{
		"shop_id" : 133784
	},
	{
		"shop_id" : 133785
	},
	{
		"shop_id" : 133775
	},
	{
		"shop_id" : 133765
	},
	{
		"shop_id" : 93662
	},
	{
		"shop_id" : 133787
	},
	{
		"shop_id" : 133789
	},
	{
		"shop_id" : 0
	},
	{
		"shop_id" : 133790
	},
	{
		"shop_id" : 133791
	},
	{
		"shop_id" : 133793
	},
	{
		"shop_id" : 133796
	},
	{
		"shop_id" : 133797
	},
	{
		"shop_id" : 133798
	},
	{
		"shop_id" : 133795
	},
	{
		"shop_id" : 133801
	},
	{
		"shop_id" : 133802
	},
	{
		"shop_id" : 133807
	},
	{
		"shop_id" : 133806
	},
	{
		"shop_id" : 133808
	},
	{
		"shop_id" : 133814
	},
	{
		"shop_id" : 133816
	},
	{
		"shop_id" : 133819
	},
	{
		"shop_id" : 133821
	},
	{
		"shop_id" : 133813
	},
	{
		"shop_id" : 133823
	},
	{
		"shop_id" : 133825
	},
	{
		"shop_id" : 133827
	},
	{
		"shop_id" : 133826
	},
	{
		"shop_id" : 133829
	},
	{
		"shop_id" : 133832
	},
	{
		"shop_id" : 133834
	},
	{
		"shop_id" : 133833
	},
	{
		"shop_id" : 133838
	},
	{
		"shop_id" : 133837
	},
	{
		"shop_id" : 133836
	},
	{
		"shop_id" : 133839
	},
	{
		"shop_id" : 133842
	},
	{
		"shop_id" : 133843
	},
	{
		"shop_id" : 133844
	},
	{
		"shop_id" : 133845
	},
	{
		"shop_id" : 133848
	},
	{
		"shop_id" : 133849
	},
	{
		"shop_id" : 133850
	},
	{
		"shop_id" : 133840
	},
	{
		"shop_id" : 133853
	},
	{
		"shop_id" : 133854
	},
	{
		"shop_id" : 133855
	},
	{
		"shop_id" : 133857
	},
	{
		"shop_id" : 133858
	},
	{
		"shop_id" : 133859
	},
	{
		"shop_id" : 133862
	},
	{
		"shop_id" : 133856
	},
	{
		"shop_id" : 133865
	},
	{
		"shop_id" : 133864
	},
	{
		"shop_id" : 133867
	},
	{
		"shop_id" : 133868
	},
	{
		"shop_id" : 133866
	},
	{
		"shop_id" : 133870
	},
	{
		"shop_id" : 94266
	},
	{
		"shop_id" : 133872
	},
	{
		"shop_id" : 133875
	},
	{
		"shop_id" : 133876
	},
	{
		"shop_id" : 133877
	},
	{
		"shop_id" : 133880
	},
	{
		"shop_id" : 133882
	},
	{
		"shop_id" : 133883
	},
	{
		"shop_id" : 133878
	},
	{
		"shop_id" : 133884
	},
	{
		"shop_id" : 133885
	},
	{
		"shop_id" : 133879
	},
	{
		"shop_id" : 133886
	},
	{
		"shop_id" : 133889
	},
	{
		"shop_id" : 133888
	},
	{
		"shop_id" : 133893
	},
	{
		"shop_id" : 133892
	},
	{
		"shop_id" : 133894
	},
	{
		"shop_id" : 133891
	},
	{
		"shop_id" : 133896
	},
	{
		"shop_id" : 133898
	},
	{
		"shop_id" : 133901
	},
	{
		"shop_id" : 133899
	},
	{
		"shop_id" : 133895
	},
	{
		"shop_id" : 133897
	},
	{
		"shop_id" : 133905
	},
	{
		"shop_id" : 133904
	},
	{
		"shop_id" : 133907
	},
	{
		"shop_id" : 133908
	},
	{
		"shop_id" : 133909
	},
	{
		"shop_id" : 133906
	},
	{
		"shop_id" : 133903
	},
	{
		"shop_id" : 133912
	},
	{
		"shop_id" : 133914
	},
	{
		"shop_id" : 133916
	},
	{
		"shop_id" : 133917
	},
	{
		"shop_id" : 133918
	},
	{
		"shop_id" : 133919
	},
	{
		"shop_id" : 133920
	},
	{
		"shop_id" : 133911
	},
	{
		"shop_id" : 118434
	},
	{
		"shop_id" : 133922
	},
	{
		"shop_id" : 133913
	},
	{
		"shop_id" : 133924
	},
	{
		"shop_id" : 133928
	},
	{
		"shop_id" : 133929
	},
	{
		"shop_id" : 133925
	},
	{
		"shop_id" : 133931
	},
	{
		"shop_id" : 133933
	},
	{
		"shop_id" : 133930
	},
	{
		"shop_id" : 133932
	},
	{
		"shop_id" : 133935
	},
	{
		"shop_id" : 133936
	},
	{
		"shop_id" : 133937
	},
	{
		"shop_id" : 133942
	},
	{
		"shop_id" : 133943
	},
	{
		"shop_id" : 133945
	},
	{
		"shop_id" : 133944
	},
	{
		"shop_id" : 133869
	},
	{
		"shop_id" : 133946
	},
	{
		"shop_id" : 133947
	},
	{
		"shop_id" : 133949
	},
	{
		"shop_id" : 133948
	},
	{
		"shop_id" : 133951
	},
	{
		"shop_id" : 133950
	},
	{
		"shop_id" : 133952
	},
	{
		"shop_id" : 133953
	},
	{
		"shop_id" : 133954
	},
	{
		"shop_id" : 133955
	},
	{
		"shop_id" : 87
	},
	{
		"shop_id" : 133960
	},
	{
		"shop_id" : 133957
	},
	{
		"shop_id" : 133847
	},
	{
		"shop_id" : 133967
	},
	{
		"shop_id" : 5348
	},
	{
		"shop_id" : 133970
	},
	{
		"shop_id" : 133968
	},
	{
		"shop_id" : 133969
	},
	{
		"shop_id" : 133973
	},
	{
		"shop_id" : 133972
	},
	{
		"shop_id" : 133975
	},
	{
		"shop_id" : 133976
	},
	{
		"shop_id" : 133977
	},
	{
		"shop_id" : 133978
	},
	{
		"shop_id" : 133971
	},
	{
		"shop_id" : 133984
	},
	{
		"shop_id" : 133987
	},
	{
		"shop_id" : 133940
	},
	{
		"shop_id" : 133988
	},
	{
		"shop_id" : 133994
	},
	{
		"shop_id" : 133999
	},
	{
		"shop_id" : 134000
	},
	{
		"shop_id" : 91773
	},
	{
		"shop_id" : 134002
	},
	{
		"shop_id" : 133788
	}
]


const modifiedData = data.map(shop => shop.shop_id);

console.log(modifiedData.length);


fs.writeFile('shop_ids.json', JSON.stringify(modifiedData), (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File has been written successfully.');
  }
});
